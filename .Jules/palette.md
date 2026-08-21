## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-08-20 - Skip to Content Links
**Learning:** To properly implement 'Skip to Content' links, ensure the target wrapper (e.g. around {children} in layout) has tabIndex={-1} and outline-none to correctly shift focus programmatically without creating an unwanted focus ring.
**Action:** Always wrap the children in Context Providers inside layout.tsx with a div having id="main-content" tabIndex={-1} outline-none when adding a skip link.
