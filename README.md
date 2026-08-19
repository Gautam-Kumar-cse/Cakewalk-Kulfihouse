# Cakewalk & Kulfihouse — Website

## Files
- `index.html` — all page content and structure
- `style.css` — all styling (colors, fonts, layout, animations)
- `script.js` — all interactivity (menu data, WhatsApp links, order form, filters, gallery, lightbox)
- `assets/images/favicon.svg` — browser tab icon

Keep all four in the **same folder**. No build step needed — it's plain HTML/CSS/JS.

## About the photos
I wasn't able to verify and legally source the shop's actual product photographs, so
every cake/product image on the site is currently a **styled placeholder**
(a colour gradient in the cake's flavour tones with a cake-line icon) rather than
a real photo. This keeps the site honest — no invented or stock-photo-as-real-product
images — while still looking intentional and premium, not like a broken image icon.

**To swap in real photos:**
Each placeholder `<div class="cake-photo ...">` has a `title="add photo: filename.jpg"`
attribute (visible on hover) telling you exactly what file it expects, e.g.
`black-forest-cake.jpg`, `gallery-birthday-cake.jpg`. The easiest way to add real photos:
1. Save your photos into `assets/images/`.
2. In `script.js`, each cake/menu/gallery item has a `photo:` field — replace the CSS
   class reference with an `<img>` tag pointing at your file (I'm happy to do this
   swap for you if you upload the photos).

## Hosting
Works as-is on **GitHub Pages**, **Netlify**, or any static web host:
- GitHub Pages: push all files to a repo, enable Pages on the `main` branch root.
- Netlify: drag-and-drop the folder into Netlify's deploy area.
- Any host: upload the files via FTP/File Manager to the public/www folder.

## Things confirmed from your brief (kept as-is)
- Name, address, phone/WhatsApp number, hours, Instagram handle, Google rating (4.5/5,
  727+ reviews), and all 16 cake prices are used exactly as given, with a visible note
  that prices may change and should be confirmed before ordering.
- No invented reviews, owner name, awards, or years-in-business — none were provided.

## To update later
- **Prices/cakes:** edit the `CAKES` array at the top of `script.js`.
- **Menu items:** edit the `MENU` object in `script.js`.
- **Text content:** edit directly in `index.html`.
- **Colors/fonts:** edit the `:root` variables at the top of `style.css`.
