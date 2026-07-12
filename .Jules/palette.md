## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-07-12 - Skip to Content Links and Focus Management
**Learning:** When implementing "Skip to Content" links, the target container must be able to accept programmatic focus so that keyboard users are properly navigated down the page. However, this can result in an unwanted visible focus ring on the entire main content area.
**Action:** Always add `tabIndex={-1}` and `className="outline-none"` to the target container (e.g., `<div id="main-content">`) to ensure it accepts programmatic focus without displaying a visible focus ring, providing a seamless experience for keyboard and screen reader users.
