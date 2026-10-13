# Team Directory App

A responsive React team directory built with Vite, Tailwind CSS, and React Router. Browse a local list of team members, search by name, save favorites, view member details, and switch between light and dark mode.

## Requirements
- Node.js (current LTS recommended) and npm
- Git (for the GitHub submission)

## Run locally
1. Open this folder in VS Code.
2. Open **Terminal → New Terminal**.
3. Install packages: `npm install`
4. Start the development server: `npm run dev`
5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To verify a production build, run `npm run build`.

## Routes
- `/` — Home
- `/users` — Searchable team directory
- `/users/:id` — User details
- `/about` — About the app
- Any unmatched route — 404 Not Found

## Project structure
- `src/data/users.js` — Local sample user data
- `src/components/` — Navbar, UserCard, Button, Loader, ErrorMessage
- `src/pages/` — Home, Users, UserDetails, About, NotFound

All sample data is local; the app does not call an API.
