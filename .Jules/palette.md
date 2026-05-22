## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-05-23 - Skip to Content Focus Management
**Learning:** Target containers for Skip to Content links must have `tabIndex={-1}` to accept programmatic focus, but need `outline-none` to prevent visible focus rings on mouse clicks.
**Action:** Always add `tabIndex={-1}` and Tailwind `outline-none` to `#main-content` targets.
