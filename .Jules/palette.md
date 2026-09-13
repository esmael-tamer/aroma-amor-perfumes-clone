## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Skip to Content Links in App Router
**Learning:** Target containers for 'Skip to Content' links must have `tabIndex={-1}` and `outline-none` to accept programmatic focus properly without showing an unwanted visible focus ring. In Next.js App Router, placing this ID on a persistent wrapper exactly around `{children}` inside any Context Providers in `layout.tsx` (e.g., `<div id="main-content">`) ensures the browser can correctly shift programmatic focus into the main React tree.
**Action:** Always add `tabIndex={-1}` and `outline-none` to target containers for skip links.
