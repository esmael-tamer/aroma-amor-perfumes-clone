## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Skip to Content Focus Management
**Learning:** For "Skip to Content" links to work effectively in Next.js/SPA contexts, the target container requires `tabIndex={-1}` and `outline-none` to programmatically receive focus without a visual ring, ensuring screen readers announce the content immediately.
**Action:** Add `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"` to the main wrapper of every page layout when implementing skip links.
