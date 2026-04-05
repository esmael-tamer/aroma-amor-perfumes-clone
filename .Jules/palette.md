## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-04-05 - Adding a Skip to Content Link to an RTL layout
**Learning:** Implementing visually hidden elements (like skip links) in Next.js requires them to be positioned relative to the overall layout root. In this Next.js app layout, the link needed to be injected into `<body>` in `layout.tsx`, but the targeted `<main>` container exists locally in `page.tsx`. To prevent visual bugs when un-hiding the element in Tailwind v4, CSS translate utilities (`-translate-y-[150%] focus:translate-y-0`) provide smoother accessibility feedback without resetting paddings like the native `sr-only` untoggle. Furthermore, the link needs a high z-index (like `z-[100]`) to layer over sticky RTL `Header` components.
**Action:** For Next.js projects with nested layouts, place the skip link at the top of the root layout, but add the matching `id='main-content'`, `tabIndex={-1}` and `outline-none` explicitly on the individual `<main>` tags across pages.
