## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-10 - Skip to Content Links
**Learning:** Adding a "Skip to Content" link improves keyboard navigation accessibility by allowing users to bypass repetitive header navigation. Target containers require `tabIndex={-1}` and `outline-none` to receive focus without displaying a default focus ring.
**Action:** When adding skip links, apply them directly inside `<body>`, use `#main-content` as the anchor, and add `id="main-content"`, `tabIndex={-1}`, and `outline-none` to the primary `<main>` wrapper of each page layout.
