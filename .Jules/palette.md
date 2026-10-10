## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-10-10 - Adding missing `htmlFor` attributes to form labels
**Learning:** The `checkout` form inputs lacked programmatic association via `id`/`htmlFor`, making it inaccessible to screen reader users and missing out on the click-to-focus behavior.
**Action:** Add `htmlFor` to form labels with corresponding `id` on inputs to ensure proper form accessibility.
