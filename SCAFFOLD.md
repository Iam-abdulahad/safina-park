# SCAFFOLD.md — Wave 0 setup (lead only, before any parallel agents)

Goal: lock structure, style and checks so every agent's output has the same shape.
Do this once, commit it to `main`, then start the agents.

> Versions: pin exact versions in `package.json` and commit `pnpm-lock.yaml`. These configs assume Tailwind 3.4 (the Tailwind ESLint plugin has the most reliable support there; verify plugin compatibility before moving to Tailwind 4).

---

## 1. Wave 0 checklist

- [ ] Create the Next.js app (App Router, TypeScript, Tailwind, ESLint, `src/` **not** used), pnpm
- [ ] Add dependencies: `next-intl`, `framer-motion`, `gsap`, `zod`
- [ ] Add dev dependencies: `prettier`, `prettier-plugin-tailwindcss`, `eslint-plugin-tailwindcss`, `eslint-plugin-import`, `husky`, `lint-staged`, `plop`, `picomatch`, `vitest`, `@playwright/test`
- [ ] Write the config files in §3
- [ ] Put design tokens from `Style.md` into `tailwind.config.ts` and `app/globals.css`
- [ ] Set up fonts with `next/font` (Bricolage Grotesque, Anek Bangla, Figtree, Hind Siliguri)
- [ ] Set up next-intl routing (`/bn`, `/en`), `messages/bn.json`, `messages/en.json`
- [ ] Write `types/` (Zod schemas and types from PRD §9) and `content/` with placeholder data
- [ ] Write `lib/` (`whatsapp.ts`, `format.ts`, `seo.ts`, `analytics.ts`) with tests
- [ ] Build `components/ui/` primitives: `Button`, `Chip`, `Badge`, `TicketStub`, `Container`, `Section`, `Heading`
- [ ] Build `components/motion/` wrappers (`Reveal`, `SkyScene`) with reduced-motion support
- [ ] Build the root layout: header, footer, mobile action bar, language switch
- [ ] Build the **golden reference**: Attractions page + `AttractionGrid`, `AttractionCard`, `AttractionFilters`
- [ ] Add generators (§5), scope guard (§6), CI (§7), hooks (§8), CODEOWNERS (§9)
- [ ] Create `AGENTS.md`, `PRD.md`, `Style.md`, `tasks/`, and the one-line agent pointer files (§10)
- [ ] Run everything once: `pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm build`
- [ ] Tag the commit `scaffold-v1`

---

## 2. Folder tree (fixed)

```
.
├─ AGENTS.md  PRD.md  Style.md
├─ CLAUDE.md  GEMINI.md                        # one line: "Read and follow /AGENTS.md"
├─ .cursor/rules/project.mdc                   # same one-liner
├─ .github/
│  ├─ CODEOWNERS
│  ├─ pull_request_template.md
│  ├─ copilot-instructions.md                  # one-liner
│  └─ workflows/ci.yml
├─ .husky/pre-commit  .husky/pre-push
├─ tasks/                                      # one task file per agent task
├─ scripts/ check-scope.mjs  check-i18n.mjs
├─ plopfile.mjs
├─ app/
│  ├─ globals.css
│  └─ [locale]/
│     ├─ layout.tsx                            # LOCKED
│     └─ (site)/
│        ├─ page.tsx                           # Home
│        ├─ attractions/ page.tsx  [slug]/page.tsx
│        ├─ stay/ page.tsx  [slug]/page.tsx
│        ├─ facilities/page.tsx
│        ├─ tickets/page.tsx
│        ├─ events/page.tsx
│        ├─ gallery/page.tsx
│        ├─ contact/page.tsx
│        ├─ plan/page.tsx
│        ├─ map/page.tsx
│        ├─ policies/page.tsx
│        └─ not-found.tsx
├─ app/api/inquiry/route.ts                    # form delivery
├─ components/
│  ├─ ui/                                      # LOCKED primitives
│  ├─ motion/                                  # LOCKED (Reveal, SkyScene)
│  ├─ layout/                                  # LOCKED (Header, Footer, MobileActionBar, LanguageSwitch)
│  ├─ map/
│  └─ sections/
│     ├─ home/  attractions/  stay/  facilities/
│     ├─ tickets/  events/  gallery/  contact/  plan/  policies/
├─ content/        attractions.ts rooms.ts tickets.ts packages.ts events.ts facilities.ts reviews.ts settings.ts
├─ lib/            whatsapp.ts format.ts seo.ts analytics.ts booking/ (provider interface only)
├─ types/          schemas.ts  index.ts
├─ messages/       bn.json  en.json
├─ i18n/           routing.ts  request.ts
└─ public/         fonts/  media/  icons/
```

---

## 3. Config files

### 3.1 `tsconfig.json` (key options)
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": false,
    "forceConsistentCasingInFileNames": true,
    "paths": { "@/*": ["./*"] }
  }
}
```

### 3.2 `.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 3.3 `.editorconfig`
```ini
root = true
[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
```

### 3.4 `.nvmrc`
```
22
```

### 3.5 `eslint.config.mjs`
```js
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import tailwind from 'eslint-plugin-tailwindcss';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const features = ['home', 'attractions', 'stay', 'facilities', 'tickets', 'events', 'gallery', 'contact', 'plan', 'policies'];

// each feature folder may not import another feature's section components
const featureZones = features.map((f) => ({
  target: `./components/sections/${f}`,
  from: './components/sections',
  except: [`./${f}`],
  message: 'Sections may not import from other feature sections. Move shared code to components/ui (ask lead).',
}));

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tailwind.configs['flat/recommended'],
  {
    plugins: { import: importPlugin },
    rules: {
      // style and structure
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-console': 'error',
      'import/no-default-export': 'error',

      // layering: ui and lib are low level, nothing low level imports high level
      'import/no-restricted-paths': ['error', {
        zones: [
          { target: './components/ui', from: './components/sections', message: 'ui must not import sections.' },
          { target: './components/ui', from: './app', message: 'ui must not import app.' },
          { target: './lib', from: './components', message: 'lib must not import components.' },
          { target: './lib', from: './app', message: 'lib must not import app.' },
          { target: './types', from: './components', message: 'types must not import components.' },
          ...featureZones,
        ],
      }],

      // tokens only
      'tailwindcss/no-arbitrary-value': 'error',
      'tailwindcss/no-custom-classname': 'error',
      'no-restricted-syntax': ['error',
        { selector: 'Literal[value=/#[0-9a-fA-F]{3,8}\\b/]', message: 'No hardcoded hex colors. Use Tailwind tokens.' },
        { selector: 'JSXAttribute[name.name="style"][value.expression.type="ObjectExpression"]', message: 'No inline style objects. Use Tailwind classes.' },
      ],
    },
  },
  // framework files that require default exports
  {
    files: [
      'app/**/page.tsx', 'app/**/layout.tsx', 'app/**/loading.tsx', 'app/**/error.tsx',
      'app/**/not-found.tsx', 'app/**/route.ts', '*.config.{js,mjs,ts}', 'plopfile.mjs',
    ],
    rules: { 'import/no-default-export': 'off' },
  },
  // tokens are defined here, hex is allowed
  { files: ['tailwind.config.ts', 'app/globals.css', 'components/motion/SkyScene.tsx'], rules: { 'no-restricted-syntax': 'off' } },
  { ignores: ['.next/**', 'node_modules/**', 'public/**'] },
];
```

### 3.6 `package.json` scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint . --max-warnings=0",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "i18n:check": "node scripts/check-i18n.mjs",
    "scope": "node scripts/check-scope.mjs",
    "gen": "plop",
    "check": "pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm i18n:check && pnpm build",
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{ts,tsx,js,mjs,json,md,css}": "prettier --write",
    "*.{ts,tsx}": "eslint --max-warnings=0"
  }
}
```

---

## 4. Locked shared layer (what the lead builds)

| Area | Contents | Why locked |
|---|---|---|
| `tailwind.config.ts`, `globals.css` | Colors, fonts, radius, type scale (`text-display-xl`…`text-small`), easing | One source for the look |
| `components/ui/*` | `Button` (primary, secondary, whatsapp, call), `Chip`, `Badge`, `TicketStub`, `ArchImage`, `Section`, `Container`, `Heading` | Agents compose, never re-implement |
| `components/motion/*` | `Reveal` (reduced-motion safe), `SkyScene` | Single motion implementation |
| `components/layout/*` | Header, Footer, MobileActionBar, LanguageSwitch | Consistent chrome |
| `lib/*` | WhatsApp URL builder, price/number formatter, SEO helper, analytics event enum | Same behavior everywhere |
| `types/*` | Zod schemas and TS types from PRD §9 | Contracts between agents |
| `messages/*.json` | Shared keys (`common.*`, `nav.*`) | Feature keys are added by feature agents under their own namespace |

---

## 5. Generators (`plopfile.mjs`)

Agents run `pnpm gen page <name>`, `pnpm gen section <feature> <Name>`, or `pnpm gen component <feature> <Name>` instead of hand-creating files.

```js
import fs from 'node:fs';

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const writeJson = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');

export default function (plop) {
  // adds a namespace with placeholder keys to both language files
  plop.setActionType('addI18nNamespace', (answers, config) => {
    const ns = plop.getHelper('camelCase')(answers[config.nameField]);
    for (const lang of ['bn', 'en']) {
      const file = `messages/${lang}.json`;
      const data = readJson(file);
      if (!data[ns]) data[ns] = { title: `${ns} title (${lang})` };
      writeJson(file, data);
    }
    return `i18n namespace "${ns}" added to bn.json and en.json`;
  });

  plop.setGenerator('page', {
    description: 'New route page with metadata and i18n',
    prompts: [{ type: 'input', name: 'name', message: 'Route name (kebab-case, e.g. tickets):' }],
    actions: [
      {
        type: 'add',
        path: 'app/[locale]/(site)/{{kebabCase name}}/page.tsx',
        template: `import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, namespace: '{{camelCase name}}', path: '/{{kebabCase name}}' });
}

export default async function {{pascalCase name}}Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('{{camelCase name}}');

  return (
    <main id="main">
      <h1 className="font-display text-display-l">{t('title')}</h1>
    </main>
  );
}
`,
      },
      { type: 'addI18nNamespace', nameField: 'name' },
    ],
  });

  plop.setGenerator('section', {
    description: 'Server section component inside a feature folder',
    prompts: [
      { type: 'input', name: 'feature', message: 'Feature (e.g. tickets):' },
      { type: 'input', name: 'name', message: 'Section name (PascalCase, e.g. PriceTable):' },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/sections/{{kebabCase feature}}/{{pascalCase name}}.tsx',
        template: `import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/ui/Section';

interface {{pascalCase name}}Props {
  className?: string;
}

export async function {{pascalCase name}}({ className }: {{pascalCase name}}Props) {
  const t = await getTranslations('{{camelCase feature}}');

  return (
    <Section className={className}>
      <h2 className="font-display text-display-m">{t('title')}</h2>
    </Section>
  );
}
`,
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Client component inside a feature folder',
    prompts: [
      { type: 'input', name: 'feature', message: 'Feature (e.g. attractions):' },
      { type: 'input', name: 'name', message: 'Component name (PascalCase):' },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/sections/{{kebabCase feature}}/{{pascalCase name}}.tsx',
        template: `'use client';

interface {{pascalCase name}}Props {
  className?: string;
}

export function {{pascalCase name}}({ className }: {{pascalCase name}}Props) {
  return <div className={className} />;
}
`,
      },
    ],
  });
}
```

---

## 6. Scope guard (`scripts/check-scope.mjs`)

Mechanically verifies that an agent only changed the files listed under "Allowed files" in its task file, and never touched locked paths.

```js
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import picomatch from 'picomatch';

const taskFile = process.argv[2];
if (!taskFile) {
  console.error('Usage: pnpm scope tasks/<id>-<name>.md');
  process.exit(1);
}

const LOCKED = [
  'tailwind.config.ts', 'next.config.*', 'tsconfig.json', 'eslint.config.mjs', 'plopfile.mjs',
  'package.json', 'pnpm-lock.yaml', 'AGENTS.md', 'PRD.md', 'Style.md', '.github/**', '.husky/**',
  'scripts/**', 'app/globals.css', 'app/[locale]/layout.tsx',
  'components/ui/**', 'components/motion/**', 'components/layout/**', 'lib/**', 'types/**', 'i18n/**',
];

const esc = (p) => p.replace(/\[/g, '\\[').replace(/\]/g, '\\]');

const md = readFileSync(taskFile, 'utf8');
const section = md.split(/^## Allowed files.*$/m)[1]?.split(/^## /m)[0] ?? '';
const allowed = section
  .split('\n')
  .filter((l) => l.trim().startsWith('- '))
  .flatMap((l) => l.trim().slice(2).replace(/`/g, '').replace(/\s*\(.*\)\s*$/, '').split(','))
  .map((s) => s.trim())
  .filter(Boolean);

if (allowed.length === 0) {
  console.error('No allowed files found in task file.');
  process.exit(1);
}

const base = process.env.BASE ?? 'main';
const run = (cmd) => execSync(cmd, { encoding: 'utf8' }).split('\n').filter(Boolean);
const changed = [...new Set([
  ...run(`git diff --name-only ${base}...HEAD`),
  ...run('git diff --name-only'),
  ...run('git diff --name-only --cached'),
  ...run('git ls-files --others --exclude-standard'),
])];

const isAllowed = picomatch(allowed.map(esc), { dot: true });
const isLocked = picomatch(LOCKED.map(esc), { dot: true });
const taskPath = taskFile.replace(/^\.\//, '');

const violations = changed.filter((f) => f !== taskPath && (!isAllowed(f) || (isLocked(f) && !isAllowed(f))));

if (violations.length) {
  console.error('Out-of-scope changes:\n' + violations.map((v) => ` - ${v}`).join('\n'));
  process.exit(1);
}
console.log(`Scope OK (${changed.length} changed files).`);
```

Note: `messages/*.json` appears in most tasks' allowed files. The guard allows the file, and `pnpm i18n:check` plus the reviewer verify that only the feature's namespace changed.

---

## 7. i18n check (`scripts/check-i18n.mjs`)

```js
import { readFileSync } from 'node:fs';

const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );

const bn = new Set(flatten(JSON.parse(readFileSync('messages/bn.json', 'utf8'))));
const en = new Set(flatten(JSON.parse(readFileSync('messages/en.json', 'utf8'))));

const missingInBn = [...en].filter((k) => !bn.has(k));
const missingInEn = [...bn].filter((k) => !en.has(k));

if (missingInBn.length || missingInEn.length) {
  if (missingInBn.length) console.error('Missing in bn.json:\n' + missingInBn.map((k) => ` - ${k}`).join('\n'));
  if (missingInEn.length) console.error('Missing in en.json:\n' + missingInEn.map((k) => ` - ${k}`).join('\n'));
  process.exit(1);
}
console.log(`i18n OK (${en.size} keys).`);
```

---

## 8. Git hooks

`.husky/pre-commit`
```sh
pnpm lint-staged
```

`.husky/pre-push`
```sh
pnpm typecheck && pnpm i18n:check
```

---

## 9. CI and ownership

`.github/workflows/ci.yml`
```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version-file: .nvmrc, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm format:check
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm i18n:check
      - run: pnpm build
      # optional: Lighthouse CI against a preview URL, fail under mobile performance 85
```

`.github/CODEOWNERS` (replace `@your-github`)
```
/AGENTS.md                    @your-github
/PRD.md                       @your-github
/Style.md                     @your-github
/tailwind.config.ts           @your-github
/app/globals.css              @your-github
/app/[locale]/layout.tsx      @your-github
/components/ui/               @your-github
/components/motion/           @your-github
/components/layout/           @your-github
/lib/                         @your-github
/types/                       @your-github
/scripts/                     @your-github
/.github/                     @your-github
```
Enable branch protection on `main`: require CI to pass and require code-owner review.

`.github/pull_request_template.md`
```md
## Task
tasks/<id>-<name>.md

## Checks
- [ ] pnpm check passes
- [ ] pnpm scope tasks/<id>-<name>.md passes
- [ ] bn and en both updated
- [ ] Matches golden reference patterns
- [ ] 360 px mobile, keyboard, reduced-motion verified

## Requests for lead
none
```

---

## 10. One-line pointer files

Create each of these with the same single line so every agent tool reads the same rules:

| File | Content |
|---|---|
| `CLAUDE.md` | `Read and follow /AGENTS.md` |
| `GEMINI.md` | `Read and follow /AGENTS.md` |
| `.github/copilot-instructions.md` | `Read and follow /AGENTS.md` |
| `.cursor/rules/project.mdc` | `---` / `alwaysApply: true` / `---` / `Read and follow /AGENTS.md` |

---

## 11. Running the agents

```bash
# per task
git worktree add ../park-03-tickets -b agent/03-tickets
cd ../park-03-tickets && pnpm install
# give the agent the standard prompt from TASK_TEMPLATE.md

# before opening a PR
pnpm check
pnpm scope tasks/03-tickets.md
```

Merge order: one PR at a time. After each merge, every other branch runs `git rebase main` and re-runs `pnpm check`.

Keep the model and tool settings consistent across agents where you can (same model, same temperature, same instruction files). Variation between tools is much smaller when the repo itself enforces the rules.
