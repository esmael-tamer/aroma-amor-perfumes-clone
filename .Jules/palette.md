## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-11-01 - Added skip to content link for accessibility
**Learning:** For users who rely on keyboards, navigating through a long global header repeatedly can be tedious. A hidden 'Skip to Content' link improves accessibility significantly. Note: For RTL layouts (like Arabic), it should be positioned using `right-*` rather than `left-*`.
**Action:** Always include a 'Skip to Content' link in the root layout pointing to the main content area, with appropriate RTL positioning, and apply `tabIndex={-1}` and `outline: none` to the target elements.
