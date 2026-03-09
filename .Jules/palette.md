## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Disabled State on Number Decrementers
**Learning:** Decrement (minus) buttons in quantity selectors often lack disabled states when the value is at the minimum (e.g., 1), allowing users to click and potentially creating confusion even if the backend/state prevents 0 or negative numbers.
**Action:** Always add `disabled={value <= 1}` and corresponding visual disabled styles to decrement buttons to provide immediate, clear feedback.
