## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - "Skip to Content" Programmatic Focus Management
**Learning:** When implementing "Skip to Content" links targeting a main content area (`id="main-content"`), the target container must explicitly include `tabIndex={-1}` and `outline-none` classes to allow programmatic focus by the browser without displaying an unwanted visual focus ring. Furthermore, in RTL layouts (`dir="rtl"`), the link must be positioned using `right-4` instead of `left-4`.
**Action:** Always wrap `{children}` in root layouts with `<div id="main-content" tabIndex={-1} className="outline-none">` when introducing global accessibility skip links, and align absolute positioning logic with the document direction.
