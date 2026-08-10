## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-01 - Next.js App Router Skip Link Target
**Learning:** When implementing "Skip to Content" links in Next.js App Router, the target container must accept programmatic focus to successfully shift the screen reader's virtual cursor.
**Action:** Always wrap the `{children}` prop inside `layout.tsx` with a persistent container that has `id="main-content"`, `tabIndex={-1}`, and Tailwind's `outline-none` to prevent unwanted visible focus rings when the link is activated.
