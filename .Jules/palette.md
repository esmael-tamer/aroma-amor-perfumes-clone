## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-03-24 - Accessibility improvements on forms
**Learning:** It is crucial for labels to have a proper `htmlFor` attribute that references the `id` of their target inputs. Otherwise, screen reader users and users navigating by click will have a hard time properly focusing the inputs.
**Action:** Always ensure `htmlFor` on `<label>` elements targets a valid `id` on the corresponding `<input>` or `<textarea>`.
