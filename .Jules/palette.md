## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-04-21 - RTL Accessible Skip Links
**Learning:** In strictly RTL () layouts, absolutely positioned accessibility elements like Skip to Content links should use  (e.g., ) instead of  to adhere to the native reading direction, even if  technically works.
**Action:** When implementing absolutely positioned elements, always consider the README.md	       next.config.ts	  postcss.config.mjs
bun.lock	       node_modules	  public
components.json        package-lock.json  src
eslint.config.mjs      package.json	  test-results
eslint.config.mjs.bak  pnpm-lock.yaml	  tsconfig.json
next-env.d.ts	       pnpm_start.log	  tsconfig.tsbuildinfo attribute of the nearest text-direction container (or ) to determine appropriate  vs  positioning.
## 2024-05-26 - RTL Accessible Skip Links
**Learning:** In strictly RTL (dir='rtl') layouts, absolutely positioned accessibility elements like Skip to Content links should use right-x (e.g., right-4) instead of left-x to adhere to the native reading direction, even if left-x technically works.
**Action:** When implementing absolutely positioned elements, always consider the dir attribute of the nearest text-direction container to determine appropriate left vs right positioning.
