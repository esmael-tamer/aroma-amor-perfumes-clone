## 2024-03-24 - Accessibility improvements on forms
**Learning:** It is crucial for labels to have a proper `htmlFor` attribute that references the `id` of their target inputs. Otherwise, screen reader users and users navigating by click will have a hard time properly focusing the inputs.
**Action:** Always ensure `htmlFor` on `<label>` elements targets a valid `id` on the corresponding `<input>` or `<textarea>`.
