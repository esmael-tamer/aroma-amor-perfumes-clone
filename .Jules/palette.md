## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2025-06-05 - Missing IDs on Form Elements
**Learning:** Found multiple form inputs in CheckoutPage.tsx without `id` attributes, disconnecting them from their `label`s which use `htmlFor` implicitly or are missing it entirely. This is a common a11y issue.
**Action:** Always verify that every `<label>` has an `htmlFor` attribute matching its associated `<input id="...">` to ensure proper screen reader linkage.
