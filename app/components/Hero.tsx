'use client';

import React, { useCallback } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { fadeInDownVariants, fadeInUpVariants } from '../animations/variants';

const descriptions = ['machine learning engineer', 'data scientist', 'ai enthusiast', 'software engineer'];

const Hero: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();
    const description = useTypingEffect(descriptions);

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
                <h2 className="text-2xl font-light text-white">
                    {description}<span className="animate-pulse">|</span>
                </h2>
            </motion.div>
            <motion.button
                onClick={scrollToAbout}
                className="absolute bottom-8 transition-transform hover:translate-y-1"
                aria-label="Scroll to About section"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <i className="bi bi-chevron-down text-white text-4xl"></i>
            </motion.button>
        </section>
    );
}

export default Hero;
