## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-05-07 - Native Button Focus States
**Learning:** Custom native `<button>` elements often lack default keyboard focus indicators; explicitly adding Tailwind classes like `focus-visible:ring-2 outline-none` maintains keyboard navigation accessibility.
**Action:** Add `focus-visible:ring-2 outline-none` and dynamic aria labels to icon-only buttons like those in tables/lists.
