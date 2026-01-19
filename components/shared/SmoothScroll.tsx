'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
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

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return <>{children}</>;
};
