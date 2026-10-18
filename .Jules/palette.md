## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-18 - Skip to Content Link Accessibility
**Learning:** When implementing "Skip to Content" in RTL layouts (like Arabic), absolute positioning must use `right-*` (e.g., `right-4`) instead of `left-*` to appear at the logical start. Target containers must also use `tabIndex={-1}` and `outline-none` to accept programmatic focus without unwanted rings.
**Action:** Always verify RTL-specific positioning and programmatic focus management when adding accessibility navigation aids to Next.js layouts.
