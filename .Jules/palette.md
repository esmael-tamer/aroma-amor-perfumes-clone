## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-01-31 - Admin Dashboard Recent Orders Accessibility Improvements
**Learning:** List items that contain interactive elements or present actionable data should be structured as a `<ul>`/`<li>` semantic list rather than generic `<div>` stacks to improve screen reader context. Additionally, adding `focus-within:ring-2` to the parent container significantly improves visual tracking when users keyboard-navigate through its children links.
**Action:** Always favor semantic lists (`<ul>`, `<ol>`) for repeating interactive widgets and use `focus-within` on the parent to highlight the entire active region during keyboard navigation.
