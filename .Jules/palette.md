## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-05-04 - Dynamic ARIA Labels for Icon Buttons in Data Tables
**Learning:** In data-driven UI tables (like Admin Orders), using a static `title` on an icon-only button isn't sufficient for screen reader users to distinguish which row's action they are triggering. Also, the inner SVG icons shouldn't be read out if the button itself is labeled.
**Action:** Always provide a dynamic `aria-label` (e.g., `aria-label={`عرض تفاصيل الطلب رقم ${order.id}`}`) on icon-only action buttons in lists/tables, and apply `aria-hidden="true"` to the nested decorative SVG.
