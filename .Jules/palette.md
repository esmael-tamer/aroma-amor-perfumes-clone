## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Skip to Content Wrapper
**Learning:** To ensure target containers for 'Skip to Content' links accept programmatic focus properly without showing an unwanted visible focus ring, add `tabIndex={-1}` and Tailwind's `outline-none` class to the target element. In Next.js App Router, place this ID on a persistent wrapper exactly around `{children}` inside any Context Providers in `layout.tsx` (e.g., `<div id="main-content">`) to ensure the browser can correctly shift programmatic focus into the main React tree.
**Action:** Always wrap `{children}` in `layout.tsx` with `<div id="main-content" tabIndex={-1} className="outline-none">` when adding skip links.
