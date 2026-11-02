## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-11-03 - Missing Focus Rings on Custom Buttons
**Learning:** Custom interactive elements (like quantity adjusters) built with native `<button>` tags often lack visible focus states, breaking keyboard navigation.
**Action:** Always add `focus-visible:outline-none focus-visible:ring-2` to custom `<button>` elements to ensure keyboard accessibility.

## 2024-11-03 - Strict Types CI Failure
**Learning:** CI pipelines may fail due to strict TypeScript type checking (`tsc --noEmit`), even if standard `pnpm build` passes locally with Next.js type checking skipped.
**Action:** Always run `npx tsc --noEmit` locally to identify strict type errors before submission, particularly focusing on React component prop typings and inferred `useRef` initializers.
