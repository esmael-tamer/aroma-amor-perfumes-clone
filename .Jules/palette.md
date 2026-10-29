## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2023-10-28 - [Add Explicit type="button" to Form Native Buttons & Labels to Forms]
**Learning:** React defaults native `<button>` tags without a `type` attribute to `type="submit"`. In complex custom-styled forms or drawers, omitting `type="button"` can trigger unintended form submissions, and missing `htmlFor` on labels hinders screen reader form navigation.
**Action:** Ensure all non-submit native `<button>` tags explicitly define `type="button"`, and verify that all `<label>` tags programmatically associate with their input elements via `htmlFor` and `id` matching pairs, especially on custom checkout pages.
