# Northstar Technical Consulting SPA

Single page application that showcases consulting services for technical product and program management. The site highlights offerings that include:

- Standing up program management frameworks and agile delivery systems.
- Defining product management processes and operating playbooks.
- Creating the technical blueprint for international expansion and M&A integration.
- Designing monthly/quarterly technical business reviews that drive decisions.
- Planning analytics and reporting channels that connect product, delivery, and commercial signals.

The SPA is implemented with vanilla JavaScript modules—no frameworks required—so the experience is fast, portable, and easy to host.

## Getting Started

```bash
npm install
npm run dev
```

The app will be served via [`serve`](https://www.npmjs.com/package/serve) on http://localhost:5173. The `--single` flag ensures refresh-safe routing for the SPA.

For a production-friendly static export, the project can be deployed as-is to any static hosting provider (Vercel, Netlify, GitHub Pages, S3, etc.).

## Project Structure

```
.
├── index.html        # Root document with SPA mount point
├── styles.css        # Global layout, theming, responsive styling
├── src/
│   ├── data.js       # Structured content for services, frameworks, reviews, analytics
│   └── main.js       # SPA renderer, state management, interactivity
├── package.json      # Scripts and tooling (serve for local dev)
└── README.md
```

## Feature Highlights

- **Stateful navigation** between Overview, Services, Enablement, Governance, and Contact sections.
- **Persona-based services**: toggle between startup, scale-up, and enterprise to see tailored outcomes.
- **Data-driven rendering** of service deliverables, success metrics, review cadences, and analytics channels.
- **Interactive contact panel** with optimistic confirmation for outreach requests.
- **Responsive design** with modern styling, accessible semantics, and keyboard-friendly service cards.

## Next Ideas

- Add lightweight persistence (e.g., Local Storage) to remember persona selection.
- Expand analytics section with embedded charts or live data sources.
- Integrate a forms provider (Netlify, Formspree, custom backend) for contact submissions.
- Replace the static server with Vite or another bundler if you want scoped components or styling.
