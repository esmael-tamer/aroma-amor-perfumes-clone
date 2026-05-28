## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-24 - Exhaustive `type="button"` Coverage Validation
**Learning:** Cloudflare Workers CI builds can fail silently (without annotations) if even a single client-side `<button>` lacks an explicit `type` attribute, due to strict implicit form submission rules. Regex-based global replacements for adding `type="button"` can be brittle, especially with multiline React attributes, leading to either missed buttons or duplicate attribute errors (`TS17001`).
**Action:** Always write robust parsers or use strict AST-based tools when doing mass attribute injections. Verify global replacements meticulously with tests like `grep -rn "<button" src/ | grep -v "type="` before committing, and ensure the local build (`pnpm build`) and type check (`tsc --noEmit`) pass without new `TS17001` duplicate attribute errors.
