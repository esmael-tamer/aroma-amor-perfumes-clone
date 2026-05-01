## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Disabled Button Tooltip Interception
**Learning:** Native disabled `<button>` elements do not reliably trigger mouse events (like hover), causing `title` tooltips or Radix `<Tooltip>` wrappers to fail to display.
**Action:** When adding explanatory tooltips to disabled action buttons (like max stock limit), wrap the `<button>` in a standard `<div>` and place the `title` or `<TooltipTrigger>` on the wrapper element to ensure accessibility.
