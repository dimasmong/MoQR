# MoQR — QR Code Studio

A premium, **fully client-side** QR code generator, ready for GitHub and Vercel. No API keys, paid services, hosting backend, npm dependencies, or third-party CDNs are required.

## Features

- QR types: Website URL (HTTP/HTTPS), Text, Wi-Fi (WPA/WEP/open), vCard 3.0 contact, email (`mailto`), and WhatsApp (`wa.me`).
- QR foreground/background color, square / rounded / dot modules, selectable error correction level.
- Local center logo upload (PNG, JPG, WebP; up to 2 MB). Automatically switches to **H** error correction and restores the former selection after removing the logo.
- Live preview, PNG export (512 / 1024 / 2048 px), and self-contained vector SVG export.
- Four-module quiet zone, contrast warning, bilingual English/Indonesian UI, Light/Dark Mode with saved preferences.
- Every input is encoded into the QR matrix locally. No user-generated QR data is sent to any service.

**Important:** MoQR makes **static** QR codes, not editable or tracked dynamic QR codes. Generated QR images do not expire, but destination URLs may change or become unavailable. Custom colors, tiny dots, and center logos can reduce scan reliability; **always scan-test before publishing or printing**. QR size and content capacity are finite.

## Project structure

```text
index.html                  Frontend page
styles.css                  Responsive Light/Dark design
app.js                      Content types, localization, QR rendering and downloads
assets/favicon.svg         MoQR browser icon
vendor/qr-engine.js        Bundled locally; no network request
scripts/build.mjs          Vercel production build helper (IMPORTANT)
package.json                Build script (no dependencies)
vercel.json                 Vercel configuration
THIRD_PARTY_LICENSES.md    QR engine attribution & notices
CARA_DEPLOY_TANPA_CODING.txt
```

## Deploy to GitHub → Vercel

1. Extract `MoQR-v1.0-GitHub-Vercel.zip`.
2. Create a **public** repository at `https://github.com/new`, named **moqr** (owner: whichever account you want to use). Leave "Add README" turned off.
3. On the empty repo, click **uploading an existing file**. Drag **all files and folders from inside the extracted folder**, not the ZIP itself. In particular, include the `scripts/` and `vendor/` folders. Press **Commit changes**.
4. At `https://vercel.com/new`, choose **GitHub**, import **moqr**, select **Hobby** if eligible, and use project name **moqr** if available.
5. **Framework Preset:** Other. **Root Directory:** `./`. **Build Command:** `npm run build`. **Output Directory:** `dist`. No environment variables needed. Click **Deploy**.
6. When status is **Ready**, open the assigned `.vercel.app` URL and scan-test each QR type. Note: `moqr.vercel.app` is **not guaranteed** to be available.

GitHub icon in the navigation points to `https://github.com/dimasmong/moqr`. If your repository has a different owner or name, change this URL in `index.html` accordingly.

## Local testing

Node.js 20+ recommended. Run `npm run check` to check JavaScript syntax and build the `dist/` output. Or open `index.html` in a modern browser (all JS/CSS/assets are local). No npm installation is required for the application code itself. Use a local static server for the most consistent browser behavior.

## License

MoQR application source: MIT (see `LICENSE`). Embedded QR engine comes from `qrcode-terminal`'s adaptation of Kazuhiko Arase's `QRCode for JavaScript`; upstream QR engine is MIT and distribution notices include Apache-2.0. See `THIRD_PARTY_LICENSES.md` for full attribution and terms.
