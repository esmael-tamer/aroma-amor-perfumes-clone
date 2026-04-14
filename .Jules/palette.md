## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - "Skip to Content" Links in Next.js
**Learning:** For accessibility, "Skip to Content" links should be rendered outside of main component hierarchies to guarantee they are the absolute first focusable elements (first child of `<body>`). Additionally, using CSS transform utilities (like `-translate-y-[150%] focus:translate-y-0`) handles focus better than structural tools like `sr-only` because they provide visual animations and prevent unwanted reflows when the outline triggers.
**Action:** Always implement Skip Links as standalone components mounted at the root (`layout.tsx` for Next.js app router), and target elements should have `id="main-content"`, `tabIndex={-1}`, and `outline-none` to accept programmatic focus silently.
