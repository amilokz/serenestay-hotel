# SereneStay — Boutique Hotel Demo Website

A fictional boutique hotel website for **SereneStay**, a twelve-suite mountain
retreat on Cart Road, Murree (Murree Hills, Pakistan). Built as a portfolio demo
for AKCLNT to show prospective hospitality clients.

## Tech

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (CSS-based theme config)
- **lucide-react** icons only — no other runtime dependencies
- No backend, no database, no external images — all artwork is hand-crafted
  CSS gradients and inline SVG

## Sections

1. **Sticky navbar** — Home, Rooms, Experiences, Gallery, Contact + Book CTA,
   glassy on scroll, mobile hamburger menu
2. **Hero** — "Wake Up Above the Clouds" with layered CSS mountain silhouettes,
   drifting mist animation, and a booking widget (check-in / check-out / guests)
3. **Rooms & Suites** — 6 rooms with PKR nightly rates, size, occupancy and
   amenities; gradient art cards; "Check Availability" scrolls here and shows a
   live estimated-total hint; "Reserve" opens the booking modal
4. **Booking modal** — pick room, dates and guests → live total calculation →
   **"Reserve via WhatsApp"** deep link (`https://wa.me/923001234567`) with the
   booking details pre-filled in the message
5. **Experiences** — Bonfire Nights, Guided Hikes, Himalayan Spa, Pahari Cuisine
6. **Gallery** — CSS gradient art tiles with labels (no external images)
7. **Testimonials** — 3 fictional guest reviews with 4.9 rating badge
8. **Location / contact** — Cart Road near Mall Road, Murree; phone, email,
   check-in times; stylised SVG map card + footer

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Standard Next.js app — deploy straight to Vercel:

```bash
vercel --prod
```

or import the repo in the Vercel dashboard (no extra configuration needed).

## Notes

- All content is fictional and written for the demo (no lorem ipsum).
- Prices are in PKR and calculated client-side; taxes & breakfast included.
- The WhatsApp number `923001234567` is a placeholder — swap it in
  `data/hotel.js` (`WHATSAPP_NUMBER`) for a real property.
