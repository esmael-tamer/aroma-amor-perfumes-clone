## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-24 - [Skip to Content Link Accessibility]
**Learning:** Adding a visually hidden "Skip to Content" link at the top of the body that appears on focus significantly improves keyboard accessibility for screen reader users and keyboard-only users, allowing them to bypass repetitive navigation links.
**Action:** Always include a SkipLink component in the root layout and ensure the main content container has an `id="main-content"` with `tabIndex={-1}` and `outline-none` so it can receive programmatic focus without showing an unwanted focus ring.
