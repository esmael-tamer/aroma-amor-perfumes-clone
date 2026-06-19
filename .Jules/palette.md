## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-06-19 - Dynamic Labels for Data Tables
**Learning:** Static `title` attributes on action buttons inside data tables (like "View Details") provide insufficient context for screen reader users, making it difficult to know which row the action applies to.
**Action:** Always use dynamic `aria-label`s that incorporate the row's unique identifier (e.g., `order.id` or `nameAr`) on icon-only buttons within lists and tables.
