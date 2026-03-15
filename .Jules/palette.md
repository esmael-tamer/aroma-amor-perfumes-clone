## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-05-15 - Disabled state for minus button in cart
**Learning:** Preventing zero or negative values for cart items improves form predictability. The native minus button lacked `disabled` state handling when item quantity equals 1. Also, it is important to override hover styles using `disabled:hover:bg-transparent disabled:hover:text-inherit` so it doesn't react to mouse hover when disabled.
**Action:** Always ensure that increment/decrement controls have appropriate disabled states with negated hover interactions.
