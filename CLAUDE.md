# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project overview

**najfolio** is the personal developer portfolio of **Najmul Huda** (`najmulmyself`) — a Mobile Application Developer (Flutter/Kotlin) exploring Go backend work, pursuing a BTech in AI at Woxsen University, and author of the open-source **Eldora UI** component library (`eldoraui.site`).

A static-ish marketing site: home, about, projects, and an MDX blog. Deployed to Vercel.

## Tech stack

- **Next.js 14+ (App Router)**, **TypeScript** (strict), **React 18**
- **Tailwind CSS** ^3.4 + **shadcn/ui** (`new-york` style, CSS-variable theming, `darkMode: class`)
- **next-themes** for light/dark (defaults to **light**), **Framer Motion** for animation, **Inter** via `next/font`
- Blog rendering: `unified` + `remark-parse` → `remark-rehype` → `rehype-pretty-code` (Shiki) → `rehype-stringify`
- Live data: GitHub REST API (stars/followers via `src/components/githubinfo.tsx`), `react-tweet` for embedded tweets

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (next/core-web-vitals)
```

No test framework is configured.

## Structure

```
src/
├── app/                # App Router routes
│   ├── layout.tsx      # Root layout: fonts, ThemeProvider, TooltipProvider, <Navbar/>
│   ├── page.tsx        # Home (hero, image bento, GitHub card, tweets)
│   ├── about/          # Work, education, skills
│   ├── projects/       # Projects, open-source contributions, hackathons
│   └── blog/           # blog/page.tsx (index), blog/[slug]/page.tsx (post + JSON-LD)
├── components/         # navbar, project-card, contributions-card, tweets, mdx, githubinfo…
│   └── ui/             # shadcn primitives (button, card, dock, badge, tooltip, avatar…)
├── data/
│   ├── index.tsx       # THE source of truth — single `DATA` object (all portfolio content)
│   └── blog.ts         # MDX loader: reads content/, parses frontmatter, compiles to HTML
└── lib/utils.ts        # cn() + formatDate()
content/                # 3 MDX blog posts (css, introducing-eldoraui, publishing-your-package)
public/                 # images, skill SVGs, resume PDF, vrmall.mp4
```

## Conventions

### Content lives in `DATA`, not in pages
Nearly all portfolio content (bio, skills, work history, education, projects, contributions, hackathons, social links, navbar items) is a single hardcoded object: **`src/data/index.tsx`** (the `DATA` export). Pages render by mapping over its arrays.

- It's `.tsx` (not `.ts`) because some entries embed JSX icon elements (e.g. `<SquareTerminal />`).
- To add/edit a project, work entry, skill, etc. → edit `DATA` in `src/data/index.tsx`. Do **not** hardcode content into page components.
- `DATA` is exported `as const`.

### Blog posts
- Add a new `.mdx` file in `content/` with YAML frontmatter: `title`, `publishedAt`, `summary`, optional `image`.
- The blog pipeline compiles MDX → HTML string and injects it via `dangerouslySetInnerHTML` on the `[slug]` page. Custom React components in MDX are **not** rendered by this pipeline.

### Styling
- Tailwind utility classes throughout. Color tokens are HSL CSS variables in `src/app/globals.css` (`:root` light, `.dark`).
- Heavy use of `@tailwindcss/typography` `.prose` blocks for content.
- Shiki/rehype-pretty-code theming (`min-light` / `min-dark`) is styled in `globals.css` (line numbers via CSS counters).
- Layout is a single narrow centered column: `max-w-2xl mx-auto` on `<body>`.

### Path alias
`@/*` → `./src/*` (configured in `tsconfig.json`).

## Known issues & gotchas

Keep these in mind — they're easy to trip on:

1. **`DATA.url` is a placeholder**: `https://eldoraui.site/xyzabc`. It feeds `metadataBase`, OG tags, canonical URLs, and JSON-LD in `layout.tsx`, so all generated URLs are currently wrong. Replace with the real deployed URL before shipping.
2. **Several referenced SVGs are missing from `/public/`** and will render as broken images: `mdxl.svg`, `tailwindcss.svg`, `php-color.svg`, `next-logo.svg`, `typescript.svg`, `threejs.svg`, `fm.svg`. (Present and valid: `aws`, `cpp`, `eldoraui`, `firebase`, `flutter`, `git`, `github-logo`, `go`, `gsap`, `javascript`, `kotlin`, `linkedin-logo`, `mysql`, `python`.) Skill icons live at `DATA.Skills[].href` / `DATA.projects[].iconLists[]`.
3. **Skill links are wrong**: every `DATA.Skills[].site` points to `https://react.dev` or `https://nextjs.org` regardless of the actual technology.
4. **Unused MDX machinery**: `src/components/mdx.tsx` (a `globalComponents` map), `next-mdx-remote`, and the Sandpack `LiveCode` setup (`src/components/sandpack.tsx`, `src/app/blog/[slug]/sandpack.tsx`) are not wired into the current blog pipeline. Treat as legacy/unused unless explicitly reviving the component-MDX pipeline.
5. **`solar-system-deck/` is an orphan** directory at repo root (empty `src/`, `output/`, `scratch/`, only a stray `@oai` under `node_modules`). Not part of the Next.js app — ignore it, or remove it.
6. **`contributions-card.tsx`** reads from `DATA.contributions` directly rather than its `items` prop — if you refactor, note this coupling.
7. **`next.config.mjs`** only allowlists `eldoraui.site` for `next/image`. Add any new remote image domains there or remote images will fail to optimize.

## Deployment

Vercel (inferred from `.gitignore` ignoring `.vercel`). Standard `next build` / `next start`. No CI/CD config files in the repo.
