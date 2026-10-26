# prompt.md — Copy and paste prompts

Package manager: npm. Every prompt below is ready to paste. Nothing to fill in except where marked.

Run order:
- Wave 0: prompt 0 (lead, once, alone)
- Wave 1 (parallel): prompts 1 to 6
- Wave 2 (parallel): prompts 7 to 10 (prompt 7 only after 2, 3 and 4 are merged)
- Wave 3 (parallel): prompts 11 and 12
- Review each PR with the reviewer prompt

Merge one PR at a time. After each merge, every other branch runs `git rebase main` and `npm run check`.

---

## 0. Wave 0: scaffold (run once, on main, before anything else)

```
Read /AGENTS.md, /PRD.md, /Style.md and /SCAFFOLD.md.
Execute the Wave 0 checklist in SCAFFOLD.md §1 in order, on the main branch.

Package manager: npm. Translate every pnpm command in the docs:
- pnpm install                   -> npm install (commit package-lock.json)
- pnpm install --frozen-lockfile -> npm ci
- pnpm add <pkg>                 -> npm install --save-exact <pkg>
- pnpm add -D <pkg>              -> npm install -D --save-exact <pkg>
- pnpm <script>                  -> npm run <script> (npm test for "test")
- pnpm gen page <name>           -> npm run gen -- page <name>
- pnpm scope <file>              -> npm run scope -- <file>
Update every file that mentions pnpm: AGENTS.md §2 and §9, TASK_TEMPLATE.md, SCAFFOLD.md, the CI workflow (actions/setup-node with cache: npm and `npm ci`, remove pnpm/action-setup), husky hooks (`npx lint-staged`, `npm run typecheck && npm run i18n:check`), package.json scripts (the `check` script chains `npm run ...`), scripts/check-scope.mjs (LOCKED list uses package-lock.json), and the PR template.

Fix this bug in scripts/check-scope.mjs: the `esc` helper must also escape parentheses, because paths like app/[locale]/(site)/tickets/** contain them. Use:
const esc = (p) => p.replace(/[\[\]()]/g, '\\$&');
Then test the scope script against a sample task file.

Rules:
- Use the exact folder tree in SCAFFOLD.md §2 and the configs in §3, §5, §6, §7, §8, §9, §10.
- Pin exact dependency versions (Tailwind 3.4) and commit package-lock.json.
- Put the design tokens from Style.md §2, §3, §4 and §11 into tailwind.config.ts and app/globals.css.
- Load fonts with next/font: Bricolage Grotesque, Anek Bangla, Figtree, Hind Siliguri (subsets latin and bengali, display swap).
- Build the locked layer: components/ui (Button, Chip, Badge, TicketStub, ArchImage, Container, Section, Heading), components/motion (Reveal, SkyScene), components/layout, lib (with tests), types (Zod schemas from PRD §9), i18n, and placeholder content for every file in content/ (attractions, rooms, tickets, packages, events, facilities, reviews, settings).
- Make sure the generators can create nested routes like stay/[slug] and files inside components/map.
- Build the golden reference: Attractions page, AttractionGrid, AttractionCard, AttractionFilters, content/attractions.ts. It must follow Style.md §7.5 (height ruler, droplets, badges) and AGENTS.md patterns exactly, because every later agent copies it.
- Decide and document how a page sets its fixed sky stage (Style.md §8.1). Put one line about it in the golden reference page.
- Use placeholders in [BRACKETS] for park name, prices, hours and phone. Never invent real values.
- Do not build any other feature page.

Finish by running:
npm run format:check && npm run lint && npm run typecheck && npm test && npm run i18n:check && npm run build
Then tag the commit `scaffold-v1` and report with the final message format from AGENTS.md §10.
```

---

## 1. Inquiry API

```
Read /AGENTS.md first, then the task file: /tasks/01-inquiry-api.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 2. Contact & Location

```
Read /AGENTS.md first, then the task file: /tasks/02-contact.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 3. Resort & Stay

```
Read /AGENTS.md first, then the task file: /tasks/03-stay.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 4. Tickets & Packages

```
Read /AGENTS.md first, then the task file: /tasks/04-tickets.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 5. Dining & Facilities

```
Read /AGENTS.md first, then the task file: /tasks/05-facilities.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 6. Attraction detail

```
Read /AGENTS.md first, then the task file: /tasks/06-attraction-detail.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 7. Home (after tasks 2, 3 and 4 are merged)

```
Read /AGENTS.md first, then the task file: /tasks/07-home.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 8. Events & Offers

```
Read /AGENTS.md first, then the task file: /tasks/08-events.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 9. Gallery

```
Read /AGENTS.md first, then the task file: /tasks/09-gallery.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 10. Policies

```
Read /AGENTS.md first, then the task file: /tasks/10-policies.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 11. Visit Planner

```
Read /AGENTS.md first, then the task file: /tasks/11-plan.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

## 12. Park Map

```
Read /AGENTS.md first, then the task file: /tasks/12-map.md.
Follow both exactly. Edit only the allowed files. Run the checks and end with the final message format from AGENTS.md §10.
This project uses npm. Wherever the docs say `pnpm <script>`, run `npm run <script>` instead. Never run pnpm or yarn. Do not touch package.json or package-lock.json.
```

---

## Setup for each task (run yourself before pasting the prompt)

```bash
git worktree add ../park-<id>-<name> -b agent/<id>-<name>
cd ../park-<id>-<name> && npm ci
```

Example for task 03: `git worktree add ../park-03-stay -b agent/03-stay`

## Before opening a PR (run yourself)

```bash
npm run check
npm run scope -- tasks/<id>-<name>.md
```

---

## Reviewer prompt (paste with the task file name for the PR you are reviewing)

```
Review this PR against /AGENTS.md and the task file for this branch in /tasks/.
1. Run: git diff --name-only main... Any file outside "Allowed files"? Reject.
2. Any hardcoded hex, arbitrary Tailwind value, inline style, or new font? Reject.
3. Any hardcoded copy, price, phone, or hours in components? Reject.
4. bn.json and en.json both updated and keys match? Run npm run i18n:check. Only the feature namespace may change.
5. Naming, folder placement, default/named exports follow AGENTS.md §3–§4?
6. Uses shared Button/TicketStub/etc. instead of re-implementing?
7. Matches the golden reference patterns?
8. Server/client split correct, no unnecessary 'use client'?
9. Accessibility: labels, alt text, focus, keyboard, reduced motion?
10. package.json and package-lock.json unchanged?
11. npm run format:check && npm run lint && npm run typecheck && npm test && npm run build all pass?
Output: PASS or a numbered list of required fixes. Do not fix the code yourself.
```