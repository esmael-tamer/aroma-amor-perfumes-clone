## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-07-02 - Skip to Content Links Styling
**Learning:** Using `sr-only` and `focus:not-sr-only` for 'Skip to Content' links can sometimes cause spacing quirks or jumpy visual feedback when focused.
**Action:** Use CSS translate utilities (e.g., `-translate-y-[150%] focus:translate-y-0 transition-transform`) for visually hiding accessible skip links to provide smoother visual feedback when they are focused by a keyboard user.
