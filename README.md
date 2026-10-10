# Yarn Unravel — landing page

Static site for the Yarn Unravel iOS app: `index.html` (landing),
`privacy.html` (Privacy Policy URL) and `support.html` (Support URL).
No build step and no external requests.

Live: https://nguyenvanlamm.github.io/yarn-unravel-site/

```bash
python3 -m http.server 8090   # preview at http://localhost:8090
```

Published by GitHub Pages from the root of `main`.

- Fonts: Mali and Nunito (SIL Open Font License, see `assets/fonts/ofl_*.txt`).
- Screenshots: WebP copies of the game's art-sheet captures.

Before launch: replace `contact@example.com`, swap the "Coming soon"
button for the official App Store badge + link, and add the
`apple-itunes-app` meta tag (see the comment in `index.html`).
