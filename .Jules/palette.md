## 2024-01-01 - [Arabic Site Accessibility]
**Learning:** Found an Arabic site configured with `lang='en'` and without `dir='rtl'`. This is a critical base accessibility issue.
**Action:** Always check `layout.tsx` or `html` tag first when working on non-English sites.

## 2024-01-01 - [Icon Buttons]
**Learning:** Icon-only buttons (Search, User, Cart) were missing `aria-label`.
**Action:** Added Arabic `aria-label`s to improve screen reader experience.

## 2024-01-01 - [Environment Issues]
**Learning:** Found broken `pnpm lint` (circular structure) and `pnpm build` (corrupted favicon).
**Action:** Isolated UX changes from env issues. Workaround for favicon: renamed it to skip build error.
