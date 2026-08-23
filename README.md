# Solace Dental Studio

A premium, custom-designed website for a boutique dental clinic, built with React + Vite + Tailwind CSS.

## Design concept

- **Studio identity:** "Solace Dental Studio" — a boutique Fitzroy practice built around unhurried, transparent care.
- **Palette:** deep petrol ink (`#123534`), porcelain (`#F1EEE6`), burnt copper (`#BB5E2E`), muted sage (`#8B9C8C`) — grounded in enamel and gold-filling tones rather than generic blue/purple or cream/terracotta.
- **Type system:** Fraunces (display serif) + Work Sans (body) + IBM Plex Mono (data, eyebrows, stats).
- **Signature element:** a hand-drawn "smile arc" (dental arch curve) that draws itself on scroll and recurs as a section divider — see `src/components/ui/SmileArc.jsx`.
- **Layout:** asymmetric hero split, an editorial numbered services list (not a card grid), a horizontal doctor lineup using tinted monogram avatars instead of stock photography, and a drag-to-reveal before/after slider.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Folder structure

```
solace-dental/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Services.jsx
    │   ├── About.jsx
    │   ├── Doctors.jsx
    │   ├── TreatmentProcess.jsx
    │   ├── BeforeAfter.jsx
    │   ├── Stats.jsx
    │   ├── Testimonials.jsx
    │   ├── AppointmentCTA.jsx
    │   ├── Footer.jsx
    │   └── ui/
    │       ├── Reveal.jsx
    │       ├── SectionHeading.jsx
    │       └── SmileArc.jsx
    └── hooks/
        └── useReveal.js
```

## Notes

- No external animation library — scroll reveals run on a small `IntersectionObserver` hook (`useReveal`), keeping the bundle lean.
- Before/After imagery is stylised (CSS + SVG), not real patient photography — swap in real case photos via the `beforeTone`/`afterTone` props or replace `ToothMark` with `<img>` tags in `BeforeAfter.jsx`.
- All copy (services, team bios, reviews, hours) is placeholder-realistic — replace with your clinic's real details before launch.
- Respects `prefers-reduced-motion` for scroll reveals and the signature arc animation.
