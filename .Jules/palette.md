## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Implementing "Skip to Content" for Accessibility
**Learning:** Adding a "Skip to Content" link greatly improves keyboard accessibility, especially for users relying on screen readers. To implement this without causing layout shifts or visibility issues, use absolute positioning with CSS translate (e.g. `translate-y-[-150%]`). Ensure RTL support by using `right-X` positioning instead of `left-X`.
**Action:** Always provide a 'Skip to Content' link as the first focusable element on a page, pointing to the main `<main id="main-content">` area.
