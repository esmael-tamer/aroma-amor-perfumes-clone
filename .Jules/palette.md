## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-04-04 - [Skip to Content Link & Next.js Layouts]
**Learning:** Next.js root layouts do not typically contain the `<main>` tag which should be the target for 'Skip to Content' links. Because pages and feature layouts define their own `<main>` tags, the skip link target `id='main-content'` must be applied across multiple distinct page and layout components instead of centrally. Additionally, absolute positioning of skip links needs to account for the RTL layout and sticky headers by ensuring high z-index and top-left placement.
**Action:** When implementing 'Skip to Content' links in Next.js App Router projects, place the link component immediately after `<body>` in the root layout, but distribute the target `id='main-content'` to all individual `<main>` tags across page files and nested layouts.
