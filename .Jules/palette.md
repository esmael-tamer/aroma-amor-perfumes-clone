## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-10-24 - Skip to Content Link
**Learning:** The Skip to Content link is essential for keyboard accessibility but must have focus:z-[100] to bypass Next.js layout headers, and the target container needs tabIndex={-1} and outline-none to avoid ugly focus rings when targeted programmatically.
**Action:** Always ensure target `<main>` wrappers correctly manage focus without introducing visible rings.
