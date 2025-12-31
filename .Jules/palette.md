# Palette's Journal 🎨

This journal captures CRITICAL UX and accessibility learnings from the Aroma Amor project.

## 2024-05-22 - Localized Accessibility for Icon-Only Buttons
**Learning:** In a primarily Arabic interface (RTL), icon-only buttons (like search, cart, user menu) often lack accessible labels. Standard English `aria-label`s are insufficient; they must be localized to Arabic to provide a meaningful experience for screen reader users in the target locale.
**Action:** Always verify that `aria-label` attributes on icon-only buttons are present and localized to the interface language (Arabic in this case).
