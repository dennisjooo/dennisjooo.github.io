'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { BlinkingCursor } from '@/components/shared/BlinkingCursor';

interface HeroContentProps {
    description: string;
    isInView: boolean;
}

export const HeroContent: React.FC<HeroContentProps> = ({ description, isInView }) => (
    <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-12 lg:p-16 pointer-events-none">
        
        {/* Top Meta Bar */}
        <div className="flex justify-between items-start text-[10px] md:text-sm lg:text-base font-mono tracking-widest uppercase opacity-60 mt-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                A Portfolio 
            </motion.div>
            <motion.div
                className="text-right"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Jakarta, Indonesia
            </motion.div>
        </div>

        {/* Main Typography */}
        <div className="flex flex-col justify-center flex-grow relative w-full -mt-10 md:mt-0">
            <motion.h1
                className="relative z-10 text-[18vw] md:text-[12vw] leading-[0.85] font-playfair italic font-normal text-foreground mix-blend-overlay dark:mix-blend-screen"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
                Dennis
            </motion.h1>
            <motion.h1
                className="relative z-10 text-[18vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter text-foreground self-end text-right w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
                JONATHAN
            </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 md:pb-0">
            <motion.div
                className="max-w-md text-sm md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/90 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <span className="font-mono text-[10px] md:text-xs lg:text-sm opacity-50 block mb-2 uppercase tracking-wider">Role</span>
                {description}<BlinkingCursor cursor="|" />
            </motion.div>

            <motion.div
                className="hidden md:block font-mono text-xs lg:text-sm tracking-widest uppercase opacity-60 writing-mode-vertical"
                style={{ writingMode: 'vertical-rl' }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                Scroll to Explore
            </motion.div>
        </div>
    </div>
);
