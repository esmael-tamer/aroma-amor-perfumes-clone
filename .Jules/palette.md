## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content Links in Next.js RTL Apps
**Learning:** The 'Skip to Content' link is a fundamental keyboard accessibility feature. When implementing this in an RTL Next.js app, the link should be positioned using `right-4` instead of `left-4`, and the target container needs `tabIndex={-1}` and `outline-none` so that it can receive programmatic focus without showing an unwanted focus ring. Wrapping `{children}` in `layout.tsx` guarantees it works across all routes.
**Action:** Always implement a skip link as the first focusable element, tailor its positioning for RTL (`right-*` instead of `left-*`), and use `tabIndex={-1}` with `outline-none` on the target container.
