## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content Target Focus Management
**Learning:** Target containers for 'Skip to Content' links must accept programmatic focus (via `tabIndex={-1}`) to route screen readers correctly, but this natively creates an unwanted visual focus ring on the entire page content.
**Action:** Always add `outline-none` alongside `tabIndex={-1}` on skip-link target wrappers to manage accessibility focus without breaking visual design.
