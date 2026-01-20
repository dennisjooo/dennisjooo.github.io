'use client';

import dynamic from 'next/dynamic';
import { HERO_CONTENT } from '@/data/heroContent';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect';
import { useTypingEffect } from '@/lib/hooks/useTypingEffect';
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { HeroContent } from './HeroContent';

const Iridescence = dynamic(() => import('./Iridescence/Iridescence').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gradient-primary" />
});

const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const description = useTypingEffect(HERO_CONTENT.descriptions);
    // Force true for LCP optimization - render immediately
    const isInView = true; 
    const { theme, systemTheme } = useTheme();
    
    // Delay WebGL loading significantly to prioritize LCP text
    // WebGL is decorative and should not block the main content
    const [showIridescence, setShowIridescence] = useState(false);
    useEffect(() => {
        // Wait for LCP to complete before loading heavy WebGL
        const timer = setTimeout(() => {
            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(() => setShowIridescence(true), { timeout: 2000 });
            } else {
                setShowIridescence(true);
            }
        }, 1000); // 1 second delay to ensure LCP completes first
        return () => clearTimeout(timer);
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
