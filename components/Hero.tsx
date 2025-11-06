'use client';

import React, { useCallback } from 'react';
import { useTypingEffect } from '@/lib/hooks/useTypingEffect';
import { useScrollEffect } from '@/lib/hooks/useScrollEffect';
import { motion, AnimationControls } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { fadeInDownVariants, fadeInUpVariants } from '@/lib/animations/variants';
import { HERO_CONTENT } from '@/data/heroContent';
import { BsChevronDown } from "react-icons/bs";

interface HeroContentProps {
    description: string;
    mainControls: AnimationControls;
}

const HeroContent: React.FC<HeroContentProps> = ({ description, mainControls }) => (
    <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center"
        variants={fadeInDownVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6 }}
    >
        <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Dennis</span>{' '}
            Jonathan
        </h1>
        <p className="max-w-xl text-base md:text-lg text-zinc-400">
            I build practical tools, experiment with AI, and turn curious ideas into thoughtful experiences.
        </p>
        <h2 className="text-lg md:text-2xl font-light text-zinc-200">
            {description}
            <span className="ml-1 inline-block animate-pulse">|</span>
        </h2>
    </motion.div>
);

const ScrollButton: React.FC<{ onClick: () => void; mainControls: AnimationControls }> = ({ onClick, mainControls }) => (
    <motion.button
        onClick={onClick}
        className="absolute bottom-12"
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
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <BsChevronDown className="text-white text-2xl" />
            </div>
        </motion.div>
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
            className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
        >
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]" />
            <div className="absolute -top-20 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-8rem] left-1/4 -z-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <HeroContent description={description} mainControls={mainControls} />
            <ScrollButton onClick={scrollToAbout} mainControls={mainControls} />
        </section>
    );
}

export default Hero;
