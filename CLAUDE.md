# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Onur Yanar (onuryanar.com) - a simple static site built with Vite.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

This is a minimal static website with no framework:

- **index.html** - Main entry point with embedded SVG logo, SEO meta tags, and schema.org structured data (Person, WebSite schemas)
- **public/css/app.css** - All styles; uses CSS custom properties for theming (cream, red, blue, yellow, black color palette)
- **public/app.js** - Minimal scroll event handler (currently unused placeholder)
- **public/** - Static assets copied directly to build output (favicons, og-image, robots.txt, sitemap.xml)

## Design System

**Style: Bauhaus-inspired brutalist design**
- Minimal, geometric shapes (squares, circles)
- Thick borders, no border-radius
- No blurs or soft shadows
- Brutal offset shadows (solid color, hard edges, offset position)

**Color palette** (CSS variables in `:root`):
- `--cream: #E6DFCD` (background)
- `--red: #F25832`
- `--blue: #3879A5`
- `--yellow: #F6CA03`
- `--black: #333333`

**Fonts** (Google Fonts):
- `Jost` - body text
- `Space Grotesk` - headings
