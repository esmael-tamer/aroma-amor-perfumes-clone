## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-23 - Skip to Content Wrapper Strategy
**Learning:** Adding `tabIndex={-1}` and `outline-none` on the target wrapper for the "Skip to Content" link is a clean and standard accessibility requirement to ensure the browser can correctly shift programmatic focus into the main React tree without showing an unwanted visible focus ring on the container itself.
**Action:** Always add these attributes to the target element (like `<div id="main-content">`) when implementing Skip to Content links.
