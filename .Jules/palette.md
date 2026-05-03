## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Dynamic aria-labels in data tables
**Learning:** Icon-only action buttons inside data tables (like View Details, Delete, Edit) need dynamic context. A generic aria-label="View Details" is insufficient when screen reader users navigate a list of 20 orders; they won't know *which* order the button refers to.
**Action:** Use string interpolation to inject row-specific identifiers into the label (e.g., aria-label="عرض تفاصيل الطلب رقم ${order.id}") for all iterative action buttons.
