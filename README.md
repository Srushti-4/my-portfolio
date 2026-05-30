# Srushti Mohire — Portfolio

A personal portfolio website for **Srushti Mohire** (Data Engineer & Python Developer), built with **Next.js 14 (App Router)** and plain CSS. It is a single-page site (Home, About, Projects, Skills, Resume, Contact) that is exported as a **fully static website**, so it can be hosted on any provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## Tech stack

- **Next.js 14** (App Router) — React framework, static export
- **React 18** — UI components
- **Plain CSS** (`globals.css` with CSS variables for theming, including dark mode)
- **FormSubmit.co** — handles the contact form (no backend needed)
- **Google Fonts** — Plus Jakarta Sans

---

## Getting started

```bash
npm install        # install dependencies (first time only)
npm run dev        # start local dev server at http://localhost:3000
npm run build      # build the static site into the out/ folder for deployment
```

> ⚠️ **Do not run `npm run build` while `npm run dev` is running** — they share the `.next` cache and will corrupt each other. Stop the dev server first. If you ever see a `Cannot find module './###.js'` error, delete the `.next` folder and restart.

---

## Folder structure

### `app/`
The Next.js App Router directory — defines the pages, global layout, and styles.
- **`layout.js`** — The root layout wrapping every page; holds all SEO metadata (title, description, Open Graph / Twitter cards, favicons), the Google Fonts link, and the structured-data (JSON-LD) block.
- **`page.js`** — The home page; assembles all the section components (Nav, Hero, About, Projects, Skills, Resume, Contact, Footer) in order.
- **`globals.css`** — All site styling, including the light/dark theme variables, layout, components, and responsive (mobile) rules.

### `components/`
One React component per section of the page, kept separate for easy editing.
- **`Nav.jsx`** — Top navigation bar with smooth-scroll links, the mobile hamburger menu, active-section highlighting, and the dark-mode toggle.
- **`Hero.jsx`** — The landing section: name, role, intro, call-to-action buttons, stat counters, profile photo, and the LinkedIn / Kaggle / GitHub buttons.
- **`About.jsx`** — About section with a photo, the "About Me" text, an education list, and an experience timeline.
- **`Projects.jsx`** — Grid of featured project cards (title, description, tech stack, and optional Code/Live links).
- **`Skills.jsx`** — Categorized skills grid plus the certifications list.
- **`Resume.jsx`** — A formatted on-page résumé (experience, education, skills, certs) with a "Download PDF" button.
- **`Contact.jsx`** — Contact details and a working message form that submits to FormSubmit.
- **`Footer.jsx`** — Footer with copyright and social/email links.
- **`Icon.jsx`** — A reusable set of inline SVG icons (GitHub, LinkedIn, Kaggle, mail, etc.) used across components.

### `lib/`
Shared data and logic that components import.
- **`content.js`** — ⭐ **The main file to edit.** All the site's content lives here: contact links (`CONFIG`), skills, projects, certifications, experience, education, and hero stats. Update text/links here without touching component code.
- **`useFadeIn.js`** — A small custom React hook that adds the scroll-triggered fade-in animation to sections.

### `public/`
Static assets served as-is at the site root (e.g. `first.jpg` is available at `/first.jpg`).
- **`first.jpg`** — Hero section profile photo.
- **`second.jpg`** — About section photo.
- *(To add before launch: `resume.pdf`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`.)*

### Root config files
- **`package.json`** — Project metadata, dependencies, and the npm scripts (`dev`, `build`, `start`, `lint`).
- **`package-lock.json`** — Exact dependency versions (auto-generated; do not edit by hand).
- **`next.config.mjs`** — Next.js configuration; enables `output: 'export'` (static site) and unoptimized images.
- **`jsconfig.json`** — Sets up the `@/` import alias that points to the project root (e.g. `@/lib/content`).
- **`.gitignore`** — Lists files/folders git should ignore (`node_modules/`, `.next/`, `out/`, etc.).

### Generated folders (not committed to git)
- **`node_modules/`** — Installed dependencies; recreated by `npm install`.
- **`.next/`** — Next.js dev/build cache; recreated automatically (safe to delete).
- **`out/`** — The final static website produced by `npm run build`; this is what gets deployed.

---

## How to update content

Most edits only require changing **`lib/content.js`**:

| To change... | Edit in `lib/content.js` |
|---|---|
| Email, GitHub, Kaggle, LinkedIn, résumé link | `CONFIG` |
| Skills & their categories | `SKILLS` |
| Projects (title, description, stack, links) | `PROJECTS` |
| Certifications | `CERTS` |
| Work experience | `EXPERIENCE` |
| Education | `EDUCATION` |
| Hero stat numbers | `HERO_STATS` |

To change a **photo**, replace the file in `public/`. To change **styling/colors**, edit the CSS variables at the top of `app/globals.css`.

---

## Deployment

Run `npm run build` to generate the static site in `out/`, then upload that folder (or connect the repo) to your host. On Vercel the build is automatic; on Netlify/Cloudflare Pages set the build command to `npm run build` and the publish directory to `out`.
