# Dennis's Portfolio

A personal portfolio website built with Next.js, React, and Tailwind CSS.

## Description

This project is a responsive and interactive portfolio website showcasing Dennis Jonathan's skills, work experience, projects, and certifications. It features a modern design with smooth animations and a dynamic layout.

## Features

- Responsive design for various screen sizes
- Dark mode support
- Interactive components like a skill cloud and project cards
- Smooth scrolling and animations
- Dynamic content loading for projects and certifications

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Icon Cloud for skill visualization
- MagicUI for the UI components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dennisjooo/portfolio-page.git
   cd portfolio-page
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment

This project is set up for deployment on GitHub Pages. The deployment process is automated using GitHub Actions. To deploy:

1. Push your changes to the `main` branch.
2. The GitHub Action will automatically build and deploy the site to GitHub Pages.

## Project Structure

- `app/`: Contains the main application code
  - `components/`: React components
  - `data/`: Static data for projects, skills, etc.
  - `hooks/`: Custom React hooks
  - `animations/`: Animation variants for Framer Motion
- `public/`: Static assets like images
- `.github/workflows/`: GitHub Actions for deployment

## Acknowledgments

- [MagicUI](https://magicui.design/) - UI components
- [Deployment YAML](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/)
