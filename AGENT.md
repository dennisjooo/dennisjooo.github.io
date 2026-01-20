# Design System & Project Guidelines

This document serves as the "Source of Truth" for the design direction and technical patterns of the Dennis Jonathan Portfolio. Use this as a reference for future development.

## 1. Core Aesthetic: "The Hipster Designer"
The site embodies a high-end, editorial, and slightly "brutalist" design language. It moves away from standard "SaaS" layouts into something more tactile and poster-like.

-   **Keywords:** Editorial, Kinetic, Tactile, Bold, Contrast.
-   **Vibe:** "Available for Work, Based in The Internet" (Modern, Digital-Native but textured).
-   **Texture:** Subtle noise overlays (`bg-noise`) are used globally to prevent the site from feeling too "flat" or sterile.

## 2. Typography Strategy
The typography relies on extreme contrast between Serif and Sans-Serif, and size variation.

### Primary Pairing
-   **Name / Headlines:** *Playfair Display* (Italic, Weight: 400) vs **Urbanist** (Bold/Black, Weight: 700+).
    -   *Usage:* The "Dennis" (Playfair) vs "JONATHAN" (Urbanist) lockup is the signature branding.
    -   *Scale:* Massive (`12vw` - `18vw`) for impact.
-   **Body / UI:** *Urbanist* (clean, geometric sans-serif).
-   **Metadata / Tech:** *Roboto Mono* (technical, code-like).
    -   *Usage:* Copyright dates, locations, "Scroll to Explore" indicators.

### Styling Rules
-   **Mix Blend Modes:** Use `mix-blend-overlay` or `mix-blend-screen` on large typography to allow backgrounds (gradients/iridescence) to interact with the text.
-   **Alignment:** Mix centered elements with extreme corner anchors (Bottom-Left for descriptions, Top-Right for metadata) to create a "Poster" composition.

## 3. Layout & Motion Patterns

### The "Peel" Effect
The site uses a vertical stacking context to create depth.
1.  **Sticky Hero:** The Hero section is `position: sticky; top: 0; z-index: 0;`.
2.  **Content Stack:** The main content container is `relative; z-index: 10;`.
3.  **The Reveal:** As users scroll, the content slides *over* the Hero (like a card deck).
4.  **Parallax:** The Hero undergoes a subtle GSAP transformation (Scale Down + Blur) as it is covered.

### Smooth Scrolling
-   **Engine:** `Lenis` is used for momentum-based smooth scrolling.
-   **Integration:** GSAP `ScrollTrigger` is synced with Lenis to ensure animation frames match the scroll position perfectly.

### Animation Library
-   **GSAP:** Used for layout-level triggers (Peel effect, scroll-driven animations).
-   **Framer Motion:** Used for component-level micro-interactions (Fade-ins, text reveals, hover states).

## 4. Component Guidelines

### Navbar
-   **Floating Pill:** The navbar is a floating glass-morphism pill.
-   **Spacing:** Ensure `HeroContent` has significant top padding (`pt-36` mobile, `pt-32` desktop) or margins (`mt-28`) to prevent visual collision with the navbar.

### Mobile Considerations
-   **Alignment:** Text alignments often switch from `text-right` (desktop) to `text-left` (mobile) to accommodate reading patterns and prevent layout jitter during animations (e.g., typing effects).
-   **Scale:** Typography scale is aggressive on mobile (`18vw`) to ensure the design intention remains clear on small screens.

## 5. Technical Stack
-   **Framework:** Next.js (App Router)
-   **Styling:** Tailwind CSS
-   **Motion:** GSAP + Framer Motion + Lenis
-   **Fonts:** `next/font/google`
