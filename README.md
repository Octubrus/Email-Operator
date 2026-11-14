# Email Operator website

One static page: `public/index.html`, with inline CSS and a small inline script. No framework and no build step.

- `public/assets/` holds the images the page uses (portrait, logos, case study screenshots, video card stills, favicon, share image).
- `public/videos/` holds the two client videos. They load only when a visitor clicks a video card.
- `public/images/` holds the original files from the old site, kept so old links to them still work.

## Run locally

```
python -m http.server 8080 --directory public
```

Then open http://localhost:8080. The form shows its error message locally, because nothing handles the POST.

## Deploy

Netlify publishes the `public` folder as it is (`netlify.toml`). The email check form uses Netlify Forms under the name `email-check`. Set up an email notification for it in the Netlify dashboard so submissions reach hello@augustinasv.com.
