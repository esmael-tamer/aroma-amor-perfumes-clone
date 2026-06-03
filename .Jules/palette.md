## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-03 - Accessible Action Buttons
**Learning:** Icon-only action buttons (like delete, edit, view) must have explicit `aria-label` attributes for screen readers and `type="button"` attributes to prevent implicit form submission behaviors, along with proper keyboard focus indicators (`focus-visible:ring-2`)
**Action:** Always add `type="button"`, an `aria-label`, and `focus-visible:ring-*` outline utilities to interactive custom buttons.
