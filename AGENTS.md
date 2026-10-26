# AGENTS.md — Park + Resort Website

This file is the single source of truth for every coding agent working in this repo.
Other agent config files (`CLAUDE.md`, `.cursor/rules/project.mdc`, `.github/copilot-instructions.md`, `GEMINI.md`) must only contain one line: `Read and follow /AGENTS.md`.

## 1. Authority order
When rules conflict, follow this order:
1. The task file you were given (scope and allowed files)
2. `AGENTS.md` (this file)
3. `PRD.md` (what to build)
4. `Style.md` (how it looks and moves)
5. The golden reference files (§8)
6. Your own preferences. These come last and usually must not be used.

If something is missing or ambiguous, **stop and write the question in your final message**. Do not invent structure, copy, prices, or features.

## 2. Stack (fixed)
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS using tokens from `tailwind.config.ts` only
- next-intl for `bn` and `en`
- Framer Motion for UI transitions, GSAP ScrollTrigger only in `components/motion/SkyScene.tsx`
- Zod for schemas, pnpm for packages
- No new dependencies. If one is needed, stop and ask.

## 3. Folder structure (fixed)
```
app/[locale]/(site)/<route>/page.tsx   # routes only: compose sections, fetch content, export metadata
components/ui/          # primitives (Button, Chip, Badge, TicketStub, ...). LOCKED
components/sections/<feature>/          # page sections, owned by the feature's agent
components/motion/      # motion wrappers. LOCKED
components/map/         # park map. Owned by map task
content/                # typed content (or CMS client). Owned by content task
lib/                    # whatsapp.ts, format.ts, seo.ts, analytics.ts, booking/. LOCKED
messages/bn.json, en.json   # i18n strings
public/                 # fonts, media, icons
types/                  # shared types. LOCKED
```
Never create new top-level folders. Never move or rename existing files.

## 4. Naming
| Thing | Rule | Example |
|---|---|---|
| Files (components) | PascalCase | `AttractionCard.tsx` |
| Files (non-components) | kebab-case | `format-price.ts` |
| Route folders | kebab-case | `attractions`, `stay` |
| Components | PascalCase, named export | `export function AttractionCard()` |
| Hooks | `useX` | `useVisitPlanner` |
| Types / interfaces | PascalCase, no `I` prefix | `RoomType` |
| i18n keys | `feature.section.element` | `attractions.filters.water` |
| Analytics events | `snake_case` from `lib/analytics.ts` enum only | `whatsapp_click` |
| CSS | Tailwind utilities only. No CSS modules, no inline `style` except CSS variables | |

Only `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx` and `route.ts` may use default exports (framework requirement).

## 5. Code rules
- Server Components by default. Add `'use client'` only for state, effects, browser APIs or motion, and keep the client part as small as possible.
- Props are typed with an explicit `interface <Name>Props`.
- Content comes from `content/` typed by `types/`. No hardcoded prices, hours, phone numbers or copy in components.
- All user-facing strings live in `messages/bn.json` and `messages/en.json`. Add both languages every time.
- Prices render only through `lib/format.ts` (handles ৳ and Bangla numerals).
- WhatsApp and call links are built only with `lib/whatsapp.ts`.
- Images: `next/image` with explicit dimensions, alt text from content, both languages.
- No `any`, no `@ts-ignore`, no `console.log`, no commented-out code, no TODOs without a task reference.
- Comments only for non-obvious decisions.

## 6. Design rules (from Style.md)
- Use only Tailwind token classes: `bg-sun`, `text-ink`, `rounded-card`, `font-display`. **No hex colors, no arbitrary values (`w-[137px]`), no new fonts.**
- Primary CTA is always the shared `Button variant="primary"` (Marigold, Ink text).
- Sentence case everywhere. No all-caps labels, no single-word color accents in headlines.
- Use shapes by role: arch for rooms and facilities, ticket stub for prices, pill for buttons and chips.
- Motion: only `transform` and `opacity`. Respect `prefers-reduced-motion` through the shared motion wrappers. No scroll fade-in on every section.
- Test layouts at 360 px width in Bangla.

## 7. Scope rules
- Edit **only** files in your task's "Allowed files".
- Never edit LOCKED paths: `tailwind.config.ts`, `components/ui/**`, `components/motion/**`, `lib/**`, `types/**`, `app/[locale]/layout.tsx`, config files, `package.json`, lockfile, `AGENTS.md`, `PRD.md`, `Style.md`.
- If you need a change in a locked file, do not make it. Add a note under "Requests for lead" in your final message.
- No drive-by refactors, renames, or formatting changes in files you were not asked to touch.
- Use generators (`pnpm gen`) to create pages, sections and components. Do not hand-create them.

## 8. Golden reference
Match these files for structure, naming, imports, i18n usage and accessibility. When unsure, copy their pattern.
- Page: `app/[locale]/(site)/attractions/page.tsx`
- Section: `components/sections/attractions/AttractionGrid.tsx`
- Client component: `components/sections/attractions/AttractionFilters.tsx`
- Content access: `content/attractions.ts`

## 9. Definition of done
Run all of these and make sure they pass before you finish:
```bash
pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm build
```
Then confirm:
- [ ] Works in `bn` and `en`, no missing keys (`pnpm i18n:check`)
- [ ] Mobile layout correct at 360 px, keyboard navigation works, focus visible
- [ ] Reduced-motion path works
- [ ] No files changed outside the allowed list (`git diff --name-only`)
- [ ] Acceptance criteria in the task file are met

## 10. Final message format
End every task with:
```
Summary: <2–4 lines>
Files changed: <list>
Checks: format ✅ lint ✅ typecheck ✅ test ✅ build ✅ i18n ✅
Requests for lead: <locked-file changes needed, or "none">
Open questions: <or "none">
```
