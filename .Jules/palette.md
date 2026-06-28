## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-28 - Skip Link Focus Management
**Learning:** For 'Skip to Content' links, the target container must accept programmatic focus to work effectively. However, simply adding `tabIndex={-1}` creates an unwanted visible focus ring on the entire page content when clicked.
**Action:** When adding `id="main-content"` and `tabIndex={-1}` to `<main>` tags for skip links, always pair them with Tailwind's `outline-none` (or standard `focus:outline-none`) to prevent the visually disruptive focus ring while maintaining programmatic focus capability.
