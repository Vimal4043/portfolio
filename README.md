# Vimal Kumar Portfolio

A modern, fully responsive personal portfolio built with React, Tailwind CSS (Vite plugin), and Framer Motion.

## Features

- Modern UI with soft gradients and glassmorphism surfaces
- Sticky navbar with active section highlighting
- Dark and light theme toggle with localStorage persistence
- Smooth section reveal animations and micro-interactions with Framer Motion
- Hero typing animation, scroll progress indicator, animated cursor, and back-to-top button
- Fully responsive mobile-first layout
- SEO-friendly metadata in `index.html`
- Accessible focus styles and semantic sections

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
	components/
		AnimatedCursor.jsx
		BackToTop.jsx
		LoadingScreen.jsx
		Navbar.jsx
		ProjectCard.jsx
		ScrollProgress.jsx
		SectionTitle.jsx
		SkillCard.jsx
		ThemeToggle.jsx
	hooks/
		useActiveSection.js
		useTheme.js
	sections/
		About.jsx
		Achievements.jsx
		Contact.jsx
		Experience.jsx
		Hero.jsx
		Projects.jsx
		Skills.jsx
	utils/
		data.js
		motion.js
	App.jsx
	index.css
	main.jsx
```

## Notes

- Update project demo links in `src/utils/data.js` with your deployed URLs.
- Social links are centralized in `src/utils/data.js` for quick edits.

## Contact Form Setup (Formspree)

1. Create a free form at Formspree and copy your endpoint URL.
2. Create a local `.env` file in the project root.
3. Add this variable:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

4. Restart the dev server after saving `.env`.

An example file is included at `.env.example`.
