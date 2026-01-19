'use client';

import React from 'react';
import { motion, AnimationControls } from 'framer-motion';
import { aboutContent } from '@/data/aboutContent';
import { fadeInUpVariants } from '@/lib/animations/variants';

interface AboutContentProps {
    mainControls: AnimationControls;
}

export const AboutContent: React.FC<AboutContentProps> = ({ mainControls }) => (
    <motion.div
        className="md:w-3/4 md:pl-5 font-light text-muted-foreground"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.6 }}
    >
        {Object.entries(aboutContent).map(([key, content], index) => (
            <motion.p
                key={key}
                className="mb-4 last:mb-0 text-base md:text-lg text-muted-foreground"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
                {content}
            </motion.p>
        ))}
    </motion.div>
);
