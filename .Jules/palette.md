## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Dynamic ARIA Labels for List Actions
**Learning:** Interactive list items and icon-only action buttons in tables/lists (e.g., in `CartDrawer` or `AdminDashboard`) must use dynamic `aria-label`s that incorporate the item's unique identifier (e.g., `nameAr` or `order.id`) to provide meaningful context for screen readers, rather than generic static titles.
**Action:** Always interpolate a unique identifier (like order ID or product name) into the `aria-label` for buttons inside iterated lists or table rows, so screen reader users know exactly which item the action applies to.
