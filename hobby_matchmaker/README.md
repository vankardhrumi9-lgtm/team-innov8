# Aatmoday Hobby Matchmaker

Aatmoday helps students describe their hobbies and interests in natural language and discover the communities, events, and people that match their vibe.

This project is a polished React + Vite front-end for the AI-powered hobby discovery experience. It focuses on the student journey from describing interests to receiving relevant matches, explanations, and conversation starters.

## Product vision

- Understand free-form student interests naturally
- Match them with relevant Aatmoday communities and events
- Explain why each match fits the user
- Generate personalized icebreakers for first conversations
- Keep the experience warm, community-driven, and student-friendly

## Core user flow

1. Student enters a hobby description or interest prompt
2. The app surfaces AI-understood interests and extracted themes
3. Relevant communities and events are recommended
4. Suggestions include match explanations and engagement reasons
5. Users can explore and join the most relevant spaces

## Key screens

- Home: landing experience and interest input
- Discover: natural-language hobby exploration
- Community: detailed community profile and recommendation fit
- Events: event discovery and match indicators
- My Match: personalized recommendation results

## Project structure

- `public/images/`: brand and visual assets
- `public/screens/`: exported HTML screens used as screen content
- `src/components/`: reusable UI building blocks
- `src/layouts/`: shared app shell and layout wrappers
- `src/pages/`: route-level screen views
- `src/assets/styles/`: global styling and theme tokens

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite in the terminal, typically:

```bash
http://localhost:5173/
```

## Production build

```bash
npm run build
```

## Notes

This app preserves the existing navigation, page flow, and product behavior while improving the overall visual polish, hierarchy, and demo-readiness for a hackathon presentation.
