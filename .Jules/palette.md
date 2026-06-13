## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.


## 2024-06-14 - Dynamic Text Updates & Icon Buttons
**Learning:** Screen readers won't announce updates to inline dynamic text like cart item quantities unless properly configured, and decorative icons inside icon-only buttons can cause redundant announcements.
**Action:** Add `aria-live="polite"` to spans or paragraphs containing dynamic values that update without a page reload (like cart quantities), and always add `aria-hidden="true"` to SVG icons inside icon-only buttons that use `aria-label`.
