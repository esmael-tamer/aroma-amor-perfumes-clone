## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-22 - Skip to Content Links for RTL
**Learning:** In RTL layouts (e.g. Arabic), absolute positioned accessibility elements like 'Skip to Content' links must be positioned using `right-*` (e.g. `right-4`) rather than `left-*` to appear at the logical start of the reading order. Also they need a high z-index (e.g., `z-[100]`) to clear sticky headers.
**Action:** Consistently position absolute top-level hidden accessibility links using RTL-aware classes (like `focus:right-4`) and high z-index values on focused state.
