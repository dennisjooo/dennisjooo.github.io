'use client';

import dynamic from 'next/dynamic';
import { HERO_CONTENT } from '@/data/heroContent';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect';
import { useTypingEffect } from '@/lib/hooks/useTypingEffect';
import React, { useMemo, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HeroContent } from './HeroContent';

const Iridescence = dynamic(() => import('@/components/iridescence').then(mod => mod.Iridescence), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gradient-primary" />
});

const Hero: React.FC = () => {
    const { ref } = useAnimateOnScroll();
    const description = useTypingEffect(HERO_CONTENT.descriptions);
    // Force true for LCP optimization - render immediately
    const isInView = true; 
    const { theme, systemTheme } = useTheme();
    
    // Delay WebGL loading to prioritize LCP text
    const [showIridescence, setShowIridescence] = useState(false);
    useEffect(() => {
        // Use requestIdleCallback if available, otherwise setTimeout
        if ('requestIdleCallback' in window) {
            const id = window.requestIdleCallback(() => setShowIridescence(true), { timeout: 500 });
            return () => window.cancelIdleCallback(id);
        } else {
            const timer = setTimeout(() => setShowIridescence(true), 200);
            return () => clearTimeout(timer);
        }
    }, []);

    useScrollEffect(ref);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';

    // Light mode: white-gray with subtle purple tint
    // Dark mode: deep purple tones
    const iridescenceColor = useMemo<[number, number, number]>(() =>
        isDark ? [0.5, 0.2, 0.8] : [0.85, 0.82, 0.9],
        [isDark]);

    return (
        <section
            id="home"
            ref={ref}
            className="h-screen w-full relative overflow-hidden bg-gradient-primary bg-noise"
        >
            <div className="absolute inset-0 z-0">
                {showIridescence && (
                    <Iridescence
                        color={iridescenceColor}
                        mouseReact={false}
                        amplitude={0.5}
                        speed={0.5}
                    />
                )}
            </div>
            
            <HeroContent description={description} isInView={isInView} />
            
        </section>
    );
};

export default Hero;
