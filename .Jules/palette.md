## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-27 - Dynamic ARIA Labels in Lists
**Learning:** Icon-only action buttons in tables/lists must use dynamic `aria-label`s that incorporate the item's unique identifier (e.g., `order.id`) to provide meaningful context for screen readers, rather than generic static titles.
**Action:** Always append unique identifiers to `aria-label`s for repeated action buttons in list structures.
