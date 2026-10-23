# Carlos Shoe Repair

A responsive, independent neighborhood business website for Carlos Shoe Repair, 2214 Broadway, New York, NY 10024. Built with vanilla JavaScript, CSS, and Vite. No backend, API keys, or paid services are required.

## Develop

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

The production site is generated in `dist/`. If your environment cannot write to its default npm cache, use `npm ci --cache /tmp/carlos-npm-cache`.

## Edit the site

- `src/business.js`: business name, contact details, directions URL, and service descriptions.
- `src/main.js`: page sections, copy, mobile navigation, and structured business data.
- `src/style.css`: responsive layouts, colors, typography, and reduced-motion support.
- `index.html`: SEO title, description, social metadata, and image preload.
- `public/images/`: locally served WebP photography in two responsive sizes.
- `public/favicon.svg`: brand favicon.

If changing business identity, also update the static SEO metadata in `index.html`. Service descriptions invite an assessment rather than promise specific repairs; confirm actual offerings with the business before publication. Hours, turnaround times, prices, history, and reviews have intentionally not been invented. The neighborhood illustration is decorative, not a precise map; directions links open the supplied Google Maps destination.

The hero image is an AI-generated illustrative workshop photograph, not a photograph of the actual shop or its work. Replace it with owner-approved shop photography if available. Fonts use Google Fonts with local system fallbacks; all other runtime assets are bundled locally. No analytics, cookies, or contact forms are included.

## Deploy to GitHub Pages

1. Commit and push the project files to the `main` branch of `farisl5/carlosshoerepairbroadway`.
2. In GitHub, open **Settings → Pages → Build and deployment → Source** and select **Deploy from a branch**, choose **gh-pages**, select **/ (root)**, and click **Save**.
3. The included `.github/workflows/deploy.yml` installs locked dependencies, runs tests, builds, and publishes the production files to `gh-pages` on pushes to `main`. GitHub Pages serves that branch. You can also run **Deploy to GitHub Pages** manually from the Actions tab.
4. After the workflow and branch deployment succeed, GitHub Pages will display the published URL, normally `https://farisl5.github.io/carlosshoerepairbroadway/`.

Vite uses a relative base (`./`) so generated assets work both under a repository subpath and at a custom-domain root. The site uses section anchors, so it needs no server routing rules. To use a custom domain, configure it in repository Pages settings and set the DNS records GitHub specifies. Add your final canonical URL and absolute social-sharing image metadata in `index.html` once the domain is known.

For other static hosts, use build command `npm run build` and publish directory `dist`. Never publish `node_modules` or the development server.

## Accessibility and performance

Semantic sections, a skip link, keyboard focus indicators, accessible menu state, Escape-to-close navigation, descriptive links, reduced-motion support, and responsive image sizes are included. Core content and navigation render through JavaScript; enable JavaScript to use the site. Images are compressed locally and the hero loads eagerly to avoid delayed first paint.
