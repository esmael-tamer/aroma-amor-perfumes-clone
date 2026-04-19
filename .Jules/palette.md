## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-04-19 - Dynamic ARIA Labels in Tables
**Learning:** When using generic icon-only buttons in lists or tables (like an 'Eye' icon for 'View Details' in an orders table), a static `aria-label` or `title` is insufficient because it doesn't specify *which* item is being viewed.
**Action:** Always inject a unique identifier (like `order.id`) into the `aria-label` for repeated action buttons in tables so screen readers can announce specific context (e.g., 'عرض تفاصيل الطلب 12345').
