## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Focus Ring on Layout Wrapper
**Learning:** Adding `tabIndex={-1}` to a main content wrapper for programmatic focus (e.g., Skip to Content link target) can cause unwanted visible focus rings in some browsers.
**Action:** Always add Tailwind's `outline-none` class alongside `tabIndex={-1}` to persistent wrappers (like `<div id="main-content">`) to suppress visual focus rings while preserving programmatic focusability.
