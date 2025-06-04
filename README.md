# Mockup Landing Page

A modern, responsive landing page built with React, TypeScript, and Vite. This project demonstrates best practices in component-based architecture, styling, and scalability for front-end development.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Used](#technology-used)
- [How to Navigate the App](#how-to-navigate-the-app)
- [Reason for Building](#reason-for-building)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Project Overview

This project is a static mockup landing page designed to showcase a clean, scalable, and maintainable front-end codebase. It serves as a template for modern web applications, focusing on best practices and a professional UI.

---

## Features

- Responsive design for mobile and desktop
- Modular, reusable React components (Header, Hero, Footer, Buttons, etc.)
- Custom theming with CSS variables and Tailwind CSS
- Type safety with TypeScript
- Organized and scalable project structure
- Easy to extend for future features, pages, or API integration

---

## Technology Used

- **React** (with functional components and hooks)
- **TypeScript** (for static type checking)
- **Vite** (for fast development and build tooling)
- **Tailwind CSS** (utility-first CSS framework)
- **React Router** (for routing)
- **ESLint** (for code quality)
- **React Icons** (for scalable vector icons)

---

## How to Navigate the App

- The main entry point is `src/main.tsx`, which sets up the router and renders the app.
- All routes are defined in `src/App.tsx`.
- The UI is composed of layout and UI components:
  - **Header:** Top navigation and branding (`src/layouts/Header.tsx`)
  - **Hero:** Main content section with call-to-action (`src/components/Hero.tsx`)
  - **Footer:** Bottom section with additional info or links (`src/components/Footer.tsx`)
- Reusable UI elements (e.g., Button, Logo) are in `src/components/ui/`.
- Static data/constants are in `src/constants/`.
- Images and assets are in `src/images/`.
- Styles are managed using Tailwind CSS and custom CSS variables in `src/index.css`.

---

## Reason for Building

This app was built to demonstrate a professional approach to front-end development, even for static pages. The goal is to show recruiters and collaborators a codebase that is:

- Scalable and easy to maintain
- Aligned with modern development standards
- Ready for extension with routing, state management, or API integration

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

---

## Project Structure

```
public/                # Static files and assets served directly
src/
  components/          # Reusable presentational components
    footer/            # Footer-related components (e.g., FooterSection)
    ui/                # UI primitives (Button, Logo, etc.)
  constants/           # Static data and configuration (e.g., navigation, footer items)
  hooks/               # Custom React hooks
  images/              # Image assets used in the app
    hero-images/       # Images specific to the hero section
  layouts/             # Layout-level components (Header, HeroTop, HeroBottom, etc.)
  pages/               # Top-level route components (e.g., Home, Features)
  types/               # Shared TypeScript types and interfaces
  App.tsx              # Main application component, defines routes
  index.css            # Global styles and Tailwind CSS imports
  main.tsx             # App entry point, sets up React and the router

```

---

#Feel free to use this project as a starting point for your own landing pages or as a reference for scalable React app architecture.
