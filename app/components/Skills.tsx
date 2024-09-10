"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from './Spinner';
import { skillIcons } from '../data/skillContent';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { fadeInUpVariants } from '../animations/variants';

const IconCloud = dynamic(() => import('./IconCloud'), {
    ssr: false,
    loading: () => <Spinner />
});

const Skills: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();

    return (
        <section ref={ref} id="skills" className="py-20 bg-gray-200 text-black min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8 }}
                >
                    Skills
                </motion.h2>
                <motion.div
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Suspense fallback={<div className="flex items-center justify-center h-64 w-full"><Spinner /></div>}>
                        <IconCloud iconSlugs={skillIcons} />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;