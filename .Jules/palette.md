## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Skip to Content Links
**Learning:** For visually hidden but accessible elements like 'Skip to Content' links, it is best to use CSS translate utilities (e.g., `-translate-y-[150%] focus:translate-y-0 transition-transform`) and explicit explicit DOM focus control with native `<a>` tags. Avoid `sr-only focus:not-sr-only`. Always place it fixed relative to the viewport (e.g., `fixed right-4 top-4 z-[100]`) rather than absolute, so it's not obscured.
**Action:** When creating skip links, follow this pattern and target an element with `id="main-content"`, `tabIndex={-1}` and `outline-none`.
