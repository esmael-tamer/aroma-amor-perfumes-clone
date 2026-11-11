## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Native Button Accessibility & Safety
**Learning:** Native `<button>` elements inside Next.js components often default to `type="submit"` which can cause unwanted form submissions, and usually lack visible focus states (unlike custom UI components).
**Action:** Always verify native `<button>` tags include `type="button"` unless they are explicit submit buttons, and ensure they have keyboard focus visibility (e.g., using `focus-visible:outline-none focus-visible:ring-2` utility classes).
