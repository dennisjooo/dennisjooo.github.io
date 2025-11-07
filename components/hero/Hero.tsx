'use client';

import dynamic from 'next/dynamic';
import { HERO_CONTENT } from '@/data/heroContent';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect';
import { useTypingEffect } from '@/lib/hooks/useTypingEffect';
import { useInView } from 'framer-motion';
import React, { useCallback, useMemo } from 'react';
import { HeroContent } from './HeroContent';
import { ScrollButton } from './ScrollButton';

const Iridescence = dynamic(() => import('@/components/iridescence').then(mod => mod.Iridescence), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gradient-to-br from-purple-600/20 to-blue-500/20" />
});

const Hero: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();
    const description = useTypingEffect(HERO_CONTENT.descriptions);
    const isInView = useInView(ref, { once: true });

    useScrollEffect(ref);

    const scrollToAbout = useCallback(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const iridescenceColor = useMemo<[number, number, number]>(() => [0.5, 0.2, 0.8], []);

    return (
        <section
            id="home"
            ref={ref}
            className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
        >
            <div className="absolute inset-0">
                <Iridescence
                    color={iridescenceColor}
                    mouseReact={false}
                    amplitude={0.5}
                    speed={0.5}
                />
            </div>
            <div className="relative">
                <HeroContent description={description} isInView={isInView} />
            </div>
            <ScrollButton onClick={scrollToAbout} mainControls={mainControls} />
        </section>
    );
};

export default Hero;
