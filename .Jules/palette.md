## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2025-05-27 - Dynamic ARIA labels for icon-only action buttons in tables
**Learning:** Icon-only action buttons in list or table views (like an eye icon to view order details) must have a dynamic `aria-label` that includes the unique identifier of the row item (e.g. `order.id`) to avoid screen reader users hearing identical "View details" announcements without context.
**Action:** When implementing icon-only action buttons within loops, always incorporate a unique item identifier into the `aria-label`, and hide the decorative icon with `aria-hidden="true"`.
