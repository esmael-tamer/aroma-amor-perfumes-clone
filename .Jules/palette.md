## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-24 - Skip to Content Pattern
**Learning:** The "Skip to Content" link requires a target with `id="main-content"` and `tabIndex={-1}` on every page layout to ensure focus moves correctly.
**Action:** When creating new page layouts, always add `id="main-content"` and `tabIndex={-1}` to the main container.

## 2024-05-24 - TypeScript Strictness in CI
**Learning:** Cloudflare Workers CI runs strict TypeScript checks that may not run locally with `next build`. Always fix type errors in components like `ErrorReporter` (use `useRef<T | null>(null)`) and verify property names in contexts (e.g., `stats.pendingOrders` vs `stats.pending`).
**Action:** Run `pnpm tsc --noEmit` locally before pushing to catch these issues.
