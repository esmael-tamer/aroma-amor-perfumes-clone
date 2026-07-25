## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Keyboard Focus Management in Next.js App Router
**Learning:** For a "Skip to Content" link to work correctly across routes in Next.js without causing an unwanted visible focus ring on the entire page content, the `#main-content` target needs `tabIndex={-1}` and `outline-none`. By wrapping `{children}` in `src/app/layout.tsx`, this target remains persistent across all routes, preventing duplicate DOM IDs that can happen if each nested page or layout declares its own main wrapper.
**Action:** Always wrap `{children}` in `layout.tsx` with `<div id="main-content" tabIndex={-1} className="outline-none">` when adding a global "Skip to Content" link.
