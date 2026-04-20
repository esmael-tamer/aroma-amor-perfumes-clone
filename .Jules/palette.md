## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Accessible Icon Buttons in Lists
**Learning:** When using icon-only buttons in data tables (like order lists), generic `aria-label`s like "View Details" do not provide sufficient context for screen reader users traversing the list.
**Action:** Use dynamic `aria-label`s that incorporate unique row identifiers (e.g., `عرض تفاصيل الطلب رقم ${order.id}`) to provide precise context. Always combine this with `aria-hidden="true"` on the inner SVG to prevent redundant announcements, and include explicit focus indicators for keyboard accessibility.
