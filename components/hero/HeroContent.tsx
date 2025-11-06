'use client';

import { motion } from 'framer-motion';
import React from 'react';
import GradientUnderline from '@/components/shared/GradientUnderline';

interface HeroContentProps {
    description: string;
    isInView: boolean;
}

export const HeroContent: React.FC<HeroContentProps> = ({ description, isInView }) => (
    <div className="text-center px-8">
        <motion.p
            className="text-sm uppercase tracking-[1em] mb-4 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0 }}
        >
            <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(199,210,254,0.5)]">
                A <span className="font-semibold">Portfolio</span> for
            </span>
        </motion.p>
        <motion.h1
            className="text-4xl md:text-5xl mb-6 text-white font-bold"
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
