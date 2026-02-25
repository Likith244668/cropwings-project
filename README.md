# CropWings Agri Drone Show — Website

A cinematic, premium brochure website for India's largest agri drone ecosystem event.

## Quick Start

### Prerequisites
- **Node.js** v18+ installed ([download](https://nodejs.org))
- **VS Code** ([download](https://code.visualstudio.com))

### Setup

1. Open this folder in VS Code
2. Open the terminal in VS Code (`Ctrl + ~` or `Cmd + ~`)
3. Run these commands:

```bash
npm install
npm run dev
```

4. Open **http://localhost:5173** in your browser

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder — deploy to Vercel, Netlify, or any static host.

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool
- **Framer Motion 11** — Animations & transitions
- **Inline styles** — No external CSS files

## Project Structure

```
cropwings-project/
├── index.html          # Entry HTML
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── README.md
└── src/
    ├── main.jsx        # React mount
    └── App.jsx         # Full website (all sections)
```
