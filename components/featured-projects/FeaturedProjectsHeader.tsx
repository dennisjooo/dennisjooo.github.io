'use client';

import { motion } from 'framer-motion';
import GradientUnderline from '@/components/shared/GradientUnderline';

export const FeaturedProjectsHeader = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
    >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            <GradientUnderline delay={0.6}>
                Featured Projects.
            </GradientUnderline>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A highlight reel of builds I loved obsessing over. Mostly scrappy experiments that makes me cherish the good old days.
        </p>
    </motion.div>
);
