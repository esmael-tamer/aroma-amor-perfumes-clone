## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-09-12 - RTL Skip to Content Positioning
**Learning:** When implementing "Skip to Content" links in Arabic/RTL interfaces (`dir="rtl"`), the logical start position is the top-right, not the top-left. Using `right-4` instead of `left-4` ensures the focusable link appears correctly at the start of the reading flow.
**Action:** Always verify the `dir` attribute and use logical positioning classes (e.g., `right-*` in RTL) for absolutely positioned accessibility aids.
