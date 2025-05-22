'use client';

import React, { useCallback } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { motion, AnimationControls } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { fadeInDownVariants, fadeInUpVariants } from '../animations/variants';
import { HERO_CONTENT } from '../data/heroContent';

interface HeroContentProps {
    description: string;
    mainControls: AnimationControls;
}

const HeroContent: React.FC<HeroContentProps> = ({ description, mainControls }) => (
    <motion.div
        className="text-center p-8"
        variants={fadeInDownVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8 }}
    >
        <h1 className="text-4xl md:text-5xl mb-3 text-white font-bold">
            <span className="underline decoration-4 underline-offset-4">Dennis</span> Jonathan
        </h1>
        <h2 className="text-lg md:text-2xl font-light text-white">
            {description}<span className="animate-pulse">|</span>
        </h2>
    </motion.div>
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
        <motion.i
            className="bi bi-chevron-down text-white text-4xl block"
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    </motion.button>
);

const Hero: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();
    const description = useTypingEffect(HERO_CONTENT.descriptions);

    useScrollEffect(ref);

    const scrollToAbout = useCallback(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section
            id='home'
            ref={ref}
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/background.webp')" }}
        >
            <HeroContent description={description} mainControls={mainControls} />
            <ScrollButton onClick={scrollToAbout} mainControls={mainControls} />
        </section>
    );
}

export default Hero;
