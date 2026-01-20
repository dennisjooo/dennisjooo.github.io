'use client';

import { ReactNode, useEffect } from 'react';

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
        // Defer Lenis initialization to after first paint
        // This prevents blocking the main thread during initial load
        const initLenis = async () => {
            const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
                import('lenis'),
                import('gsap'),
                import('gsap/ScrollTrigger')
            ]);

            // Initialize Lenis
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
            });

            // Sync Lenis with GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);
            
            lenis.on('scroll', ScrollTrigger.update);

            // Add Lenis's raf method to GSAP's ticker
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            // Disable GSAP's lag smoothing to ensure smooth scrolling
            gsap.ticker.lagSmoothing(0);

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            // Store cleanup function
            return () => {
                lenis.destroy();
                gsap.ticker.remove(lenis.raf);
            };
        };

        // Use requestIdleCallback or setTimeout to defer initialization
        let cleanup: (() => void) | undefined;
        const timeoutId = setTimeout(() => {
            initLenis().then(cleanupFn => {
                cleanup = cleanupFn;
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            cleanup?.();
        };
    }, []);

    return <>{children}</>;
};
