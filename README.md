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
- Share card: `assets/img/share-card.jpg` (1200×630), the `og:image` of every page.

Search and AI files: `sitemap.xml`, `llms.txt`, the JSON-LD in each page and the
Markdown copies `index.html.md`, `privacy.html.md` and `support.html.md` repeat the
pages' text. When a page changes, update its `.html.md`, `llms.txt`, the JSON-LD and the
sitemap `lastmod` in the same commit. Crawlers read robots.txt only at the host root
(`nguyenvanlamm.github.io/robots.txt`), which this repo cannot serve.

Before launch: swap both "Coming soon" badges (hero and closing section)
for the official App Store badge + link, and add the
`apple-itunes-app` meta tag (see the comment in `index.html`). Add the App Store URL to
the JSON-LD (`installUrl`, `offers.url`) and replace "coming soon" in `llms.txt` and
`index.html.md`.
