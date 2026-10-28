## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-10-27 - [Custom Form A11y Pattern]
**Learning:** Found that custom-styled forms in this Next.js app (specifically the CheckoutPage) were missing `htmlFor` on `<label>` elements and matching `id` attributes on `<input>` / `<textarea>` elements, breaking screen reader association.
**Action:** Always verify that every `<label>` has an `htmlFor` attribute matching the associated form control's `id`.
