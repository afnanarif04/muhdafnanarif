# Academic website — Muhammad Afnan Arif

A 5-page static academic site (Home, CV, Research, Code, Contact), ready
to host free on GitHub Pages. Content on Home, CV and Research is already
filled in from your existing Google Sites page
(sites.google.com/view/muhdafnanarif) — education, employment,
publications (with DOIs) and conference presentations. GitHub
(github.com/afnanarif04) and LinkedIn (linkedin.com/in/muhd-afnan-arif)
are linked throughout. What's still missing (a photo, working-paper
details, featured repos, ORCID) is left as a clearly marked placeholder.

## 1. Fill in what's left

Search each `.html` file for:

- `<!-- EDIT: ... -->` — a comment telling you what to change (links, photo,
  CV file).
- `class="tofill"` — placeholder text (shown with a faint gold underline
  when you open the page) such as `[Add your current working papers here]`.
  Replace the text; the class is purely visual and can stay or go.

Priority edits:

1. **Photo** — drop a square-ish JPG/PNG into `assets/photo.jpg`, then in
   `index.html` swap the placeholder `<svg>...</svg>` block for the
   `<img>` tag given in the comment right above it. The favicon and OG
   share image keep using the "MAA" monogram either way — no need to
   change those unless you want to.
2. **Google Scholar / ORCID** — still placeholders in `index.html` and
   `contact.html`; replace with your real profile links. (Email, GitHub
   and LinkedIn are already filled in with your real links.)
3. **Scholar citation stats** — the "Cited by [ ] · h-index [ ]" line
   under the hero links (`class="scholar-stats"` in `index.html`) is
   filled in by hand from your Scholar profile — see the note under
   "Scholar citation stats" below for why this can't be live.
4. **Site URL for sharing** — every page's `<head>` has an `<!-- EDIT -->`
   comment above a few `og:` / `twitter:` meta tags using
   `https://your-username.github.io` as a placeholder domain. Once you
   know your real GitHub Pages URL, find-and-replace that placeholder
   across all 5 files so link previews (WhatsApp, LinkedIn, etc.) point
   to the right place.
5. **CV** — add your real `cv.pdf` into `assets/`.
6. **Research → Working papers** — 3 placeholder entries are there,
   collapsible like the published papers above them (click the title to
   expand). Replace each title, authors/target journal, abstract and its
   3 highlight bullets. Add or remove a whole `<details class="paper">…
   </details>` block if you end up with more or fewer than 3. Once one
   is real, consider copying its summary into the "Featured working
   paper" section on `index.html` too (currently a matching placeholder).
7. **Code** — the "View all repositories" button already links to your
   real GitHub repo list. The "Featured repositories" cards below it are
   placeholders (repo name, one-line description, language tag, link) —
   pick 2–4 repos worth highlighting and fill those in; delete extra
   cards or copy the block for more.
8. **News** — the timeline on `index.html` is pre-filled with your most
   recent conference talk and two publications; add newer items above
   them as they happen, and trim old ones so it doesn't grow forever.

## 2. New in this version

### Light / dark mode toggle
A small circle button sits at the right of the nav bar on every page. It
switches between light and dark palettes and remembers the visitor's
choice (`localStorage`), defaulting to their system preference on first
visit. Logic lives in `js/site.js`; the color values for both modes are
already defined in `css/style.css` under `:root` and `:root[data-theme="dark"]`.

### Page-view counter
The Home page footer area shows "Page views" and "Visitors" counts, powered
by [busuanzi](https://busuanzi.ibruce.info/) — a free widget used by many
academic sites (e.g. the al-folio Jekyll theme) that needs **no signup**:
it's already wired up and will start counting the moment the site is live
at a real URL. It shows nothing when you open the file locally — that's
expected, not a bug.

### Visitor world map
A per-country visitor map (pins/heatmap on a world map) needs a real
analytics account, since a static GitHub Pages site has no server of its
own to log visits — there's no signup-free option for this one. Two-minute
setup:

1. Go to **https://clustrmaps.com/add** and enter your site's URL (e.g.
   `https://<your-username>.github.io`).
2. It gives you a `<script>` snippet with a unique widget ID.
3. Paste that snippet into `index.html`, inside the `<div class="stats-map">`
   block (there's a comment marking the exact spot, just above the closing
   `</section>` for "stats").
4. Push the change — the map fills in with real visitor pins over the
   following days as people visit.

(ClustrMaps and RevolverMaps are the two most common choices for this on
academic sites; ClustrMaps was used here as it's the faster of the two to
set up.)

### Favicon & link-preview image
The browser tab now shows a small maroon "MAA" monogram
(`assets/favicon.svg`), and sharing the site as a link (WhatsApp, LinkedIn,
Twitter/X, Slack) shows a branded 1200×630 preview card
(`assets/og-image.png`) instead of a bare link — both generated to match
the site's palette. Regenerate either file yourself (any image editor, or
ask me) if you'd rather use your real photo instead of the monogram.
**Note:** `og:image`/`twitter:image` need an absolute URL to work on other
platforms — see "Site URL for sharing" above.

### Research-area icons
Each hero tag (Panel Data Econometrics, Heterogeneous Panels, GMM &
Bias-Correction, Energy & Environmental Economics) now has a small
matching line icon — purely decorative, defined inline as SVG in
`index.html` next to each tag's text.

### Scholar citation stats
Google Scholar has no public API and actively blocks automated scraping
(including from a static page's own JavaScript, due to CORS), so a
live-updating citation count isn't something a GitHub Pages site can do
without a paid third-party service. The "Cited by [ ] · h-index [ ]" line
under your hero links is a plain manually-typed placeholder — update the
two numbers by hand every so often from your own Scholar profile page.

### ORCID badge
The ORCID link in the hero now uses ORCID's own green "iD" icon (their
standard branding for a verified researcher ID) instead of a generic
circle icon, so it reads as a recognized badge rather than a plain link.

### Journal quality badges
Each published paper on `research.html` now shows its Scopus/WoS quartile
as small gold pill badges (`class="qbadge"`) next to the "Published"
status, instead of being buried in the citation text — easier to scan at
a glance.

### CV timeline
The Education section on `cv.html` is now a connected vertical timeline
(dot + line, like the Home page's News section) instead of a plain list,
making the PhD → Master's → Bachelor's progression easier to read at a
glance. Employment, Publications, etc. are unchanged (plain rows) since a
timeline reads best for a strict chronological progression.

### Scroll-reveal on Home
The About / News / Selected publications / Featured working paper
sections on `index.html` gently fade up the first time each scrolls into
view — a single subtle effect, not repeated on every scroll, and it's
progressive enhancement: sections stay fully visible if JavaScript is off
or `IntersectionObserver` isn't supported (logic in `js/site.js`, guarded
by `<body data-page="home">`).

### Featured working paper on Home
A new "Featured working paper" section sits below "Selected publications"
on `index.html`, mirroring one placeholder card from `research.html`'s
Working papers section — fill it in once you've filled in a real one
there (see edit 6 above).

## 3. Preview locally (optional)

Just open `index.html` in a browser — no build step, no server needed.
(The page-view counter and visitor map won't populate locally — see above.)

## 4. Publish on GitHub Pages

1. Create a new GitHub repository. For a **user site** at
   `https://<your-username>.github.io`, name the repo exactly
   `<your-username>.github.io`. For a **project site** at
   `https://<your-username>.github.io/<repo-name>`, any repo name works.
2. Push these files to the repository's default branch (`main`):

   ```bash
   cd academic-website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub, go to the repo's **Settings → Pages**. Under "Build and
   deployment", set **Source** to "Deploy from a branch", branch `main`,
   folder `/ (root)`. Save.
4. Wait a minute or two, then visit the URL GitHub shows on that page.
5. Every time you `git push` an update, the live site updates
   automatically within a minute or so.

## File structure

```
academic-website/
├── index.html        Home — bio, news, selected publications, site stats
├── cv.html            CV — education, employment, publications, talks
├── research.html       Research — published papers (DOI) + working papers
├── code.html            Code — link to your GitHub repos + featured picks
├── contact.html         Contact
├── css/style.css       Shared styling, incl. light/dark tokens
├── js/site.js           Theme toggle, footer year, Home scroll-reveal
├── assets/
│   ├── favicon.svg      Browser-tab monogram (generated)
│   ├── og-image.png     Link-share preview image (generated)
│   └── …               Put your photo.jpg and cv.pdf here too
└── README.md            This file
```

## Design notes

- Palette: deep maroon (`--maroon`) and muted gold (`--gold`) — Universiti
  Malaya's own colours — on a quiet paper background; dark-mode palette
  defined alongside.
- Type: Source Serif 4 for headings/body, IBM Plex Sans for navigation and
  meta text (dates, labels). Both load from Google Fonts via the `<link>`
  tags in each page's `<head>`.
- To add a new page, copy any existing page, keep the shared `<header>`
  (with the theme-toggle button) and `<footer>`, and add a link to it in
  every page's nav.
