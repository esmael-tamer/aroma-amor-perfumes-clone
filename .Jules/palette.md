## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-03-20 - Contextual ARIA Labels for List Actions
**Learning:** Icon-only buttons in lists (like 'View Details' or 'Delete') need dynamic `aria-label`s containing the item's identifier (e.g., order ID or name). A static `title="View Details"` is insufficient for screen reader users navigating a long table, as they won't know *which* item the button acts upon.
**Action:** Always include the row/item identifier in the `aria-label` for action buttons within tables or lists.
