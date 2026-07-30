## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-18 - [Accessibility] Added Skip to Content for RTL layout
**Learning:** For Next.js App Router applications with RTL layout (`dir="rtl"`), the Skip to Content link must be positioned at `right-4` (logical start) instead of `left-4`. Also, wrapping `{children}` in `layout.tsx` with `<div id="main-content" tabIndex={-1} className="outline-none">` ensures programmatic focus works properly across all routes without displaying a visible focus ring on the main container.
**Action:** Apply `right-4` positioning for absolute/fixed elements intended for the "start" edge in RTL apps, and use `tabIndex={-1}` with `outline-none` on route container wrappers to ensure clean programmatic focus for screen readers.
