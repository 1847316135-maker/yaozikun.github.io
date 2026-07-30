# Zikun Yao — Academic Homepage

Personal academic homepage for **Zikun Yao**, an undergraduate student in Biomedical Engineering at Shenzhen University.

**Live site:** [yaozikun.top](https://yaozikun.top)

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **react-icons** (icons)
- **react-helmet-async** (SEO)

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky navigation bar
│   ├── Hero.tsx         # Name, title, CTA buttons
│   ├── About.tsx        # Brief bio and research interests
│   ├── Projects.tsx     # Research project cards
│   ├── Publications.tsx # Papers and research outputs
│   ├── Awards.tsx       # Awards and honors
│   ├── Skills.tsx       # Technical skills by category
│   ├── CVSection.tsx    # CV download section
│   ├── Contact.tsx      # Email, GitHub, location
│   ├── SEO.tsx          # Meta tags and structured data
│   └── Footer.tsx       # Page footer
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Tailwind imports + custom theme
```

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

Output is in the `dist/` directory.

---

## Deployment

### Option A: Cloudflare Pages (Recommended)

1. Push the project to a GitHub repository.

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

3. Select your repository and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

4. Click **Save and Deploy**.

5. **Custom domain:**
   - In your Pages project → **Custom domains** → **Set up a custom domain**.
   - Enter `yaozikun.top` and follow the DNS instructions.
   - In your domain's DNS settings (wherever yaozikun.top is managed), add a CNAME record:
     ```
     Type: CNAME
     Name: @
     Target: <your-project>.pages.dev
     ```

### Option B: GitHub Pages

1. Push the project to a GitHub repository.

2. Set the `base` in `vite.config.ts` if your repo is not `<username>.github.io`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

3. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       permissions:
         contents: read
         pages: write
         id-token: write
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/configure-pages@v4
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
         - uses: actions/deploy-pages@v4
           id: deployment
   ```

4. In GitHub repo → **Settings** → **Pages** → Source: **GitHub Actions**.

5. **Custom domain:** In **Settings** → **Pages** → **Custom domain**, enter `yaozikun.top`. Add a CNAME record in your DNS:
   ```
   Type: CNAME
   Name: @
   Target: <username>.github.io
   ```

### DNS Configuration for yaozikun.top

Regardless of the platform, configure your DNS:
- Add a **CNAME** record pointing `yaozikun.top` (or `www`) to your hosting URL.
- If using Cloudflare, ensure the proxy status is **Proxied** (orange cloud) for SSL.
- Wait for DNS propagation (usually a few minutes to 48 hours).

---

## Customization

- **CV:** Replace `/public/cv.pdf` with your actual CV file.
- **Content:** Edit the component files in `src/components/` to update your information.
- **Colors:** Modify the `@theme` block in `src/index.css` to change the color scheme.
- **Fonts:** Update the Google Fonts link in `index.html` and the `--font-sans` variable in `src/index.css`.

---

## License

MIT
