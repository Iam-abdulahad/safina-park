import { z } from 'zod';
import { NextResponse } from 'next/server';

// In-memory rate limit store
type RateInfo = { timestamps: number[] };
const rateStore: Record<string, RateInfo> = {};
const RATE_LIMIT = 5; // requests
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// Zod schemas
const baseSchema = z.object({
  type: z.enum(['room', 'event', 'general']),
  locale: z.enum(['bn', 'en']),
  website: z.string(), // honeypot, must be empty
  fields: z.object({}).passthrough(),
});

const roomSchema = z.object({
  name: z.string().min(1),
  phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/),
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  guests: z.coerce.number().int().positive(),
  roomTypeId: z.string().min(1),
  notes: z.string().optional(),
});

const eventSchema = z.object({
  name: z.string().min(1),
  phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/),
  eventType: z.string().min(1),
  date: z.string().min(1),
  guestCount: z.coerce.number().int().positive(),
  notes: z.string().optional(),
});

const generalSchema = z.object({
  name: z.string().min(1),
  phone: z.string().regex(/^(?:\+?88)?01[3-9]\d{8}$/).optional(),
  email: z.string().email().optional(),
  message: z.string().min(1),
}).refine((data) => data.phone || data.email, {
  message: 'Either phone or email must be provided',
});

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  // Rate limiting
  const now = Date.now();
  const info = rateStore[ip] ?? { timestamps: [] };
  // Remove timestamps older than window
  info.timestamps = info.timestamps.filter((t) => now - t < WINDOW_MS);
  if (info.timestamps.length >= RATE_LIMIT) {
    return NextResponse.json(
      { ok: false, code: 'rate_limited' },
      { status: 429 }
    );
  }
  info.timestamps.push(now);
  rateStore[ip] = info;

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'validation', fieldErrors: { _global: 'Invalid JSON' } }, { status: 400 });
  }

  // Honeypot check – silently succeed
  if (payload.website && payload.website.trim() !== '') {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const baseParse = baseSchema.safeParse(payload);
  if (!baseParse.success) {
    return NextResponse.json({ ok: false, code: 'validation', fieldErrors: baseParse.error.format() }, { status: 400 });
  }
  const { type, fields } = baseParse.data;

  let specificSchema: z.ZodSchema<any>;
  switch (type) {
    case 'room':
      specificSchema = roomSchema;
      break;
    case 'event':
      specificSchema = eventSchema;
      break;
    case 'general':
      specificSchema = generalSchema;
      break;
    default:
      return NextResponse.json({ ok: false, code: 'validation', fieldErrors: { type: 'Invalid type' } }, { status: 400 });
  }

  const fieldParse = specificSchema.safeParse(fields);
  if (!fieldParse.success) {
    return NextResponse.json({ ok: false, code: 'validation', fieldErrors: fieldParse.error.format() }, { status: 400 });
  }

  // Send email via Resend API
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ ok: false, code: 'delivery_failed' }, { status: 500 });
  }

  const emailBody = {
    from,
    to,
    subject: `New inquiry – ${type}`,
    html: `<pre>${JSON.stringify({ type, locale: baseParse.data.locale, fields: fieldParse.data }, null, 2)}</pre>`,
  };

  try {
    const res = await fetch('https://api.resend.com/email', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });
    if (!res.ok) throw new Error('Resend response not ok');
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, code: 'delivery_failed' }, { status: 502 });
  }
}
