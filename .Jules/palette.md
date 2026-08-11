## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-08-11 - Next.js App Router Programmatic Focus Management
**Learning:** In Next.js App Router, 'Skip to Content' links may fail to shift programmatic keyboard focus correctly if the target container isn't explicitly configured. Browsers can struggle to move focus into the main React tree without a persistent wrapper.
**Action:** Always wrap the `children` prop inside `layout.tsx` with a persistent container (e.g., `<div id="main-content">`) and apply `tabIndex={-1}` along with Tailwind's `outline-none` to accept programmatic focus silently without an unwanted visible ring.
