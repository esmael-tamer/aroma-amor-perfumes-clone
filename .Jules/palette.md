## 2023-10-27 - [Aroma Amor Perfumes]

**Learning:** Reviewing the code for button structure and `hover:` or `focus:` states, there is a good number of buttons with appropriate visual feedback. However, one common pattern missing in standard forms is an accessible "skip to content" link. Often these Next.js projects lack a hidden "Skip to main content" link at the very top of the app which helps keyboard users skip navigation headers.

**Action:** Add a "skip to main content" link that is screen-reader only until focused (`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-50 ...`) in the root layout or header.
