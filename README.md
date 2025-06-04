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
- Modular, reusable React components (Header, Hero, Footer)
- Custom theming with CSS variables
- Type safety with TypeScript
- Clean and organized project structure
- Easy to extend for future features or pages

---

## Technology Used

- **React** (with functional components)
- **TypeScript** (for static type checking)
- **Vite** (for fast development and build tooling)
- **Tailwind CSS** (utility-first CSS framework)

---

## How to Navigate the App

- The main entry point is `src/App.tsx`, which renders the layout.
- The UI is divided into three main components:
  - **Header:** Top navigation and branding.
  - **Hero:** Main content section with call-to-action.
  - **Footer:** Bottom section with additional info or links.
- All components are located in the `src/components` directory.
- Styles are managed using Tailwind CSS and custom CSS variables.

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
public/
src/
  components/
    Footer.tsx
    Header.tsx
    Hero.tsx
  images/
  layouts/
    Header.tsx
    HeroBottom.tsx
    HeroTop.tsx
  App.tsx
  main.tsx
  index.css
  ...
```

---

Feel free to use this project as a starting point for your own landing pages or as a reference for scalable React app architecture.
