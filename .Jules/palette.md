## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Accessible Skip Links Target Visibility
**Learning:** Adding a target `id` for a Skip to Content link to an element like `<main>` can sometimes cause it to show a native focus ring (outline) when activated, which is visually unappealing for non-keyboard users.
**Action:** Always add `tabIndex={-1}` and an `outline-none` utility class (or `focus:outline-none`) to the target container (`id="main-content"`) so it can receive programmatic focus to reset the page reading order without visually highlighting the entire page wrapper.
