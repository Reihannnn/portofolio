# Portfolio — Junior Software Engineer

A modern, clean, and responsive personal portfolio website. Built with **HTML + CSS + vanilla JS** (no frameworks).

## File structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Features

- Sticky navbar + smooth scrolling + scroll-spy (active link)
- Mobile hamburger menu (with animation + Escape to close)
- Hero with grid pattern, blue gradient, and decorative code card
- Overview + 4 highlight cards
- 4 project cards (badges, hover animation, shadow)
- Experience timeline, Technical Skills grid, Education card
- Contact CTA + footer
- Fade/slide reveal via IntersectionObserver, respects `prefers-reduced-motion`
- Responsive: 2 columns → 1 column on mobile, no horizontal overflow
- Accessibility: semantic HTML, skip link, aria-labels, focus-visible, contrast

## How to run

Just open directly:

```text
index.html
```

Double-click the file, or serve it statically if needed:

```powershell
npx serve .
```

## What to replace with your personal data

Already filled in: name (Reihan Achmad Susilo), email, GitHub (`reihannnn`), LinkedIn, education (2022–2026, GPA 3.72), and project repo links. Only the `Live Demo` buttons (`href="#"`) still need real URLs — or remove the button if there is no demo.

| Location | Replace with |
|---|---|
| `Live Demo` buttons (`href="#"`) | Real demo URLs, or remove the button if none |
| `assets/images/` | Project photos/thumbnails if any (then replace `.project-thumb` with `<img alt="...">`) |
| Favicon initial `P` | Name initial |
