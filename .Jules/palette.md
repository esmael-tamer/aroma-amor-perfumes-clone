## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - RTL and Focus Trap Safe Skip Links
**Learning:** For "Skip to Content" links, using `sr-only focus:not-sr-only` can cause styling issues, and `absolute` positioning doesn't persist well with sticky headers. Also, elements hidden with `opacity-0` can trap focus. For RTL languages like Arabic, positioning should respect the reading direction.
**Action:** Use CSS translate utilities (e.g., `-translate-y-[150%] focus:translate-y-0`) with `fixed` positioning (e.g., `fixed right-4 top-4 z-[100]`) to ensure smoother transitions and no invisible focus traps.
