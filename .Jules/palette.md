## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content in App Router
**Learning:** Adding an `id="main-content"` directly to a Next.js Page component or internal wrapper can be unreliable across navigations.
**Action:** For robust keyboard accessibility, place the target `<div id="main-content" tabIndex={-1} className="outline-none">` explicitly wrapping `{children}` inside the root `layout.tsx` to ensure it works globally. For RTL interfaces, use logical positioning like `right-4` instead of `left-4`.
