## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2025-05-24 - Tooltip Z-Index in Drawers
**Learning:** Tooltips inside fixed containers (like Drawers/Dialogs) with `z-50` may be obscured if the tooltip content doesn't have a higher z-index, even with Portals in some stacking contexts.
**Action:** Ensure `TooltipContent` has a higher z-index (e.g., `z-[60]`) when used inside high-z-index containers to guarantee visibility.
