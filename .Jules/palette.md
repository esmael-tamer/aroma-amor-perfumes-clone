## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-18 - Dynamic ARIA Labels for Action Buttons
**Learning:** Icon-only action buttons in lists/tables need dynamic `aria-label`s incorporating unique identifiers (e.g., `order.id`) to distinguish them. The inner SVGs should be hidden from screen readers using `aria-hidden="true"`.
**Action:** When creating icon-only action buttons in mapped lists, use a dynamic `aria-label` and `aria-hidden="true"` on the child icon.
