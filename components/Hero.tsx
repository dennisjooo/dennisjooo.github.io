'use client';

import GradientUnderline from '@/components/GradientUnderline';
import { Iridescence } from '@/components/iridescence';
import { HERO_CONTENT } from '@/data/heroContent';
import { fadeInUpVariants } from '@/lib/animations/variants';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect';
import { useTypingEffect } from '@/lib/hooks/useTypingEffect';
import { AnimationControls, motion, useInView } from 'framer-motion';
import React, { useCallback, useMemo } from 'react';
import { BsChevronDown } from "react-icons/bs";

interface HeroContentProps {
    description: string;
    isInView: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ description, isInView }) => (
    <div className="text-center p-8">
        <motion.p
            className="text-sm uppercase tracking-[1em] mb-2 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0 }}
        >
            <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(199,210,254,0.5)]">
                A <span className="font-semibold">Portfolio</span> for
            </span>
        </motion.p>
        <motion.h1
            className="text-4xl md:text-5xl mb-3 text-white font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <GradientUnderline delay={0.7}>
                Dennis
            </GradientUnderline> Jonathan
        </motion.h1>
        <motion.h2
            className="text-lg md:text-2xl font-light text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            {description}<span className="animate-pulse">|</span>
        </motion.h2>
    </div>
);

const ScrollButton: React.FC<{ onClick: () => void; mainControls: AnimationControls }> = ({ onClick, mainControls }) => (
    <motion.button
        onClick={onClick}
        className="absolute bottom-8"
        aria-label="Scroll to About section"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
    >
        <motion.div
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <BsChevronDown className="text-white text-4xl" />
        </motion.div>
    </motion.button>
);

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
            id='home'
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
}

export default Hero;
