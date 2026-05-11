## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-05-11 - Persistent Positioning for Skip Links
**Learning:** Absolute positioning on 'Skip to main content' links can cause them to be hidden behind sticky navigation bars or scrolled out of view if the page is slightly scrolled when tab focus is acquired. Fixed positioning ensures they are consistently visible relative to the viewport.
**Action:** Use `fixed right-4 top-4 z-[100]` instead of `absolute` for Skip Links to guarantee visibility across different scrolling contexts and header configurations.
