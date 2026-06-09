## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-06-09 - Dynamic ARIA Labels in Tables
**Learning:** Icon-only buttons in lists/tables with static `title` attributes lack context for screen reader users when navigating iteratively.
**Action:** Always add dynamic `aria-label`s incorporating unique identifiers (e.g., `order.id` or `product.nameAr`) to action buttons within repeating list items or table rows, and ensure the inner SVG uses `aria-hidden="true"`.
