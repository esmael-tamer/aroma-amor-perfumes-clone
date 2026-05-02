## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-05-02 - Accessible Skip Links Styling
**Learning:** For visually hidden but accessible elements like 'Skip to Content' links, using CSS translate utilities (e.g., `-translate-y-[150%] focus:translate-y-0 transition-transform`) provides smoother visual feedback and avoids Tailwind CSS v4 padding reset quirks compared to using `sr-only focus:not-sr-only`.
**Action:** Use transform/translate techniques to hide and reveal skip links on focus rather than display/sr-only utilities.
