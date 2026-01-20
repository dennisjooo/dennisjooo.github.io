'use client';

import { useRef, useEffect, type ReactNode } from 'react';

interface HomeClientProps {
    heroContent: ReactNode;
    mainContent: ReactNode;
    backToTop: ReactNode;
}

/**
 * Minimal client wrapper for GSAP scroll animations
 * Defers GSAP loading to after initial paint for better LCP
 */
export function HomeClient({ heroContent, mainContent, backToTop }: HomeClientProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Defer GSAP initialization to after LCP
        const initAnimations = async () => {
            const [gsap, { ScrollTrigger }] = await Promise.all([
                import('gsap').then(m => m.default),
                import('gsap/ScrollTrigger')
            ]);

            gsap.registerPlugin(ScrollTrigger);

            // Visual effect for the Hero as it gets covered
            gsap.to(heroRef.current, {
                scale: 0.95,
                opacity: 0.8,
                filter: "blur(5px)",
                ease: "none",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 100%",
                    end: "top 0%",
                    scrub: true,
                }
            });
        };

        // Use requestIdleCallback if available for better performance
        if ('requestIdleCallback' in window) {
            const id = window.requestIdleCallback(() => initAnimations(), { timeout: 1000 });
            return () => window.cancelIdleCallback(id);
        } else {
            const timer = setTimeout(initAnimations, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {/* Sticky Hero Section - z-0 ensures it stays behind the content */}
            <div ref={heroRef} className="sticky top-0 h-screen w-full z-0">
                {heroContent}
            </div>

            {/* Main Content Stack - z-10 ensures it slides OVER the hero */}
            <div 
                ref={contentRef} 
                className="relative z-10 bg-white dark:bg-black shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
                {mainContent}
            </div>

            {backToTop}
        </>
    );
}
