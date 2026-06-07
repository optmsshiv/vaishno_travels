# Shree Vaishnо Travels — Website

## Folder Structure

```
shreevaishnotravels/
│
├── index.html                  ← Homepage
│
├── pages/                      ← All inner pages
│   ├── destinations.html       ← All destinations listing
│   ├── packages.html           ← All packages listing
│   ├── char-dham.html          ← Char Dham special page
│   ├── package-detail.html     ← Single package detail (reuse for each)
│   ├── about.html              ← About us
│   ├── contact.html            ← Contact & enquiry
│   └── blog.html               ← Blog / Yatra tips
│
├── components/                 ← Reusable HTML snippets (copy-paste into pages)
│   ├── navbar.html             ← Navigation bar HTML snippet
│   └── footer.html             ← Footer HTML snippet
│
├── assets/
│   ├── css/
│   │   ├── variables.css       ← All colors, fonts, spacing tokens (EDIT HERE FIRST)
│   │   ├── reset.css           ← Browser reset / base styles
│   │   ├── navbar.css          ← Navbar styles
│   │   ├── footer.css          ← Footer styles
│   │   ├── hero.css            ← Hero section styles
│   │   ├── cards.css           ← Destination & package card styles
│   │   ├── forms.css           ← Enquiry forms, inputs
│   │   ├── utilities.css       ← Helper classes (.text-center, .mt-2, etc.)
│   │   ├── animations.css      ← Keyframes & animation classes
│   │   └── main.css            ← Master file — imports all above CSS
│   │
│   ├── js/
│   │   ├── navbar.js           ← Mobile menu toggle, sticky nav
│   │   ├── form.js             ← Form validation & submission
│   │   ├── animations.js       ← Scroll reveal animations
│   │   └── main.js             ← Init file — runs on every page
│   │
│   └── images/
│       ├── destinations/       ← destination photos (varanasi.jpg, etc.)
│       ├── icons/              ← favicon, logo, SVG icons
│       └── gallery/            ← Yatra photo gallery images
│
## How to Add a New Page
1. Copy any existing page from pages/
2. Change the <title> tag
3. Update the active nav link class to "active"
4. Replace the page content section
5. Keep the navbar and footer include links unchanged

## How to Change Colors / Fonts
→ Open assets/css/variables.css — all colors and fonts are defined as CSS variables here.
   Change once, updates everywhere automatically.

## How to Edit Navbar or Footer
→ Edit components/navbar.html or components/footer.html
→ Then manually copy the updated HTML into each page (or use a build tool / PHP includes)
