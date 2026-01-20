'use client';

import React, { useState, useEffect } from 'react';
import { BlinkingCursor } from '@/components/shared/BlinkingCursor';

interface HeroContentProps {
    description: string;
    isInView: boolean;
}

// CSS animations defined inline for LCP optimization
// LCP elements render immediately at full opacity, then animations kick in
export const HeroContent: React.FC<HeroContentProps> = ({ description, isInView }) => {
    // Start with animations disabled to ensure immediate LCP paint
    const [animationsReady, setAnimationsReady] = useState(false);

    useEffect(() => {
        // Enable animations after a short delay to not block LCP
        const timer = requestAnimationFrame(() => {
            setAnimationsReady(true);
        });
        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-12 lg:p-16 pointer-events-none">
            
            {/* Top Meta Bar */}
            <div className="flex justify-between items-start text-[10px] md:text-sm lg:text-base font-mono tracking-widest uppercase opacity-60 mt-16">
                <div
                    className={`${animationsReady ? 'transition-all duration-700 ease-out' : ''} ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}
                    style={animationsReady ? { transitionDelay: '200ms' } : undefined}
                >
                    A Portfolio 
                </div>
                <div
                    className={`text-right ${animationsReady ? 'transition-all duration-700 ease-out' : ''} ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                    }`}
                    style={animationsReady ? { transitionDelay: '400ms' } : undefined}
                >
                    Jakarta, Indonesia
                </div>
            </div>

            {/* Main Typography - LCP Element - NO transition delays on these! */}
            <div className="flex flex-col justify-center flex-grow relative w-full -mt-10 md:mt-0">
                <h1
                    className="relative z-10 text-[18vw] md:text-[12vw] leading-[0.85] font-playfair italic font-normal text-foreground mix-blend-overlay dark:mix-blend-screen"
                >
                    Dennis
                </h1>
                <h1
                    className="relative z-10 text-[18vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter text-foreground self-end text-right w-full"
                >
                    JONATHAN
                </h1>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 md:pb-0">
                <div
                    className={`max-w-md text-sm md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/90 text-left ${animationsReady ? 'transition-all duration-700 ease-out' : ''} ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={animationsReady ? { transitionDelay: '1000ms' } : undefined}
                >
                    <span className="font-mono text-[10px] md:text-xs lg:text-sm opacity-50 block mb-2 uppercase tracking-wider">Role</span>
                    {description}<BlinkingCursor cursor="|" />
                </div>

                <div
                    className={`hidden md:block font-mono text-xs lg:text-sm tracking-widest uppercase opacity-60 writing-mode-vertical ${animationsReady ? 'transition-opacity duration-700 ease-out' : ''} ${
                        isInView ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ writingMode: 'vertical-rl', ...(animationsReady ? { transitionDelay: '1200ms' } : {}) }}
                >
                    Scroll to Explore
                </div>
            </div>
        </div>
    );
};
