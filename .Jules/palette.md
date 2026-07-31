## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-01-31 - RTL Keyboard Accessibility: Skip to Content Link
**Learning:** When implementing accessibility features like "Skip to Content" links in a Right-to-Left (RTL) layout (`dir="rtl"`, `lang="ar"`), standard CSS positionings (like `left-4`) push the link to the end of the visual reading flow. It must be explicitly adjusted using `right-4` so it appears at the logical "start" of the document. Additionally, targeting a generic `div` wrapper for programmatic focus requires `tabIndex={-1}` and `outline-none` to prevent Next.js router from showing an ugly focus bounding box around the entire page content.
**Action:** Always check the logical layout direction (`dir="rtl"`) when positioning visually hidden, focusable elements. Wrap `{children}` in a designated focus target with `tabIndex={-1}` and `outline-none` instead of targeting native elements directly to ensure consistent, styled focus behavior.
