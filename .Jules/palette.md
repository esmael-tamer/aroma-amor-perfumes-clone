## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-08-09 - Skip to Content Target Placement
**Learning:** Skip to content links require their target container to manage programmatic focus without showing unwanted focus rings.
**Action:** Add `tabIndex={-1}` and `outline-none` (Tailwind) to the target element (e.g., `<div id="main-content">`) to ensure focus works correctly without visual artifacts.
