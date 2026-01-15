## 2026-01-15 - Tooltips on Disabled Elements
**Learning:** Tooltips on disabled buttons do not appear because disabled elements often consume pointer events or have `pointer-events: none`.
**Action:** Wrap disabled buttons in a `span` (with `tabIndex="0"` for keyboard focus if needed) and attach the tooltip trigger to the wrapper.
