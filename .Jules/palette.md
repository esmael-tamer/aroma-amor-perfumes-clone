## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Native Button Disabled Hover States
**Learning:** Native disabled `<button>` elements that use Tailwind hover variants (like `hover:bg-emerald-50`) will continue to react visually to mouse hovers even when `disabled={true}` is set, leading to confusing UX. Furthermore, `title` tooltips on `disabled` buttons often do not trigger in many browsers.
**Action:** When creating custom interactive buttons, always explicitly negate hover effects using `disabled:hover:bg-transparent disabled:hover:text-inherit`. If a tooltip is needed to explain the disabled state, wrap the button in a `div` and place the `title` attribute on the wrapper.
## 2024-05-27 - Implicit Button Forms & Next.js Type Check Failures
**Learning:** 1) Missing `type="button"` attributes break Cloudflare Workers builds globally on all native HTML buttons without throwing precise line-by-line lint logs. 2) Next.js metadata objects strictly validate against mutable arrays, rejecting `readonly` constants (like global SEO tags).
**Action:** Always manually audit entire components for `type="button"` before submitting UI PRs. Fix TS build errors related to metadata by doing intermediate casts (e.g. `as unknown as string[]`).
