"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { workExperienceData } from '@/data/workContent';
import { Timeline } from './Timeline';

const WorkExperience: React.FC = () => {
    const reduceMotionPreference = useReducedMotion();
    const shouldReduceMotion = Boolean(reduceMotionPreference);

    return (
        <section
            id="work"
            className="py-24 md:py-32 w-full bg-background text-foreground"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header - Matching About Section Style */}
                <motion.div 
                    className="w-full flex justify-between items-end mb-16 border-b border-border pb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-playfair italic text-3xl md:text-4xl text-foreground">03.</span>
                    <span className="font-mono text-xs md:text-sm uppercase tracking-widest opacity-50 text-muted-foreground">Work Experience</span>
                </motion.div>

                {/* Content */}
                <Timeline
                    items={workExperienceData}
                    shouldReduceMotion={shouldReduceMotion}
                />
            </div>
        </section>
    );
};

export default WorkExperience;
