## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content Links
**Learning:** Adding a Skip to Content link is crucial for keyboard users, but requires specific configuration to work well. The target container (usually `<main>`) must have `tabIndex={-1}` to programmatically receive focus, and `outline-none` so it doesn't show a large, confusing focus ring around the entire page content. Using `fixed` instead of `absolute` ensures the link remains visible on scroll when focused.
**Action:** Always pair a Skip to Content link with `id="main-content" tabIndex={-1} className="outline-none"` on the target container. Use `fixed top-4 right-4 z-[100]` for the link itself to ensure visibility.
