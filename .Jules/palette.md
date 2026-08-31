## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - RTL Accessibility Skip Links
**Learning:** In Arabic/RTL applications, accessibility elements like "Skip to Content" links should be physically positioned logically, meaning they should typically appear on the right side of the screen (`right-4`) rather than the default left, aligning with the reading direction.
**Action:** When adding visually hidden or off-screen focusable elements to an RTL layout, use `right-[value]` instead of `left-[value]` for proper visual flow when they gain focus.
