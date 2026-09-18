# Aatmoday Hobby Matchmaker

A simple React + Vite shell for the Stitch-generated Aatmoday Hobby Matchmaker screens.

## Structure

- `public/images/`: static brand assets
- `public/screens/`: complete Stitch HTML exports
- `src/components/`: reusable UI pieces
- `src/layouts/`: shared page wrappers
- `src/pages/`: screen-level views
- `src/assets/styles/`: global styles

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

The structured shell includes Home, Discover, Community, Events, and My Match navigation. Events reuses the preserved community detail export, while My Match reuses the preserved interest matching export because the original Stitch archive did not contain separate Event or My Match HTML screens.
