"use client";

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { workExperienceData } from '@/data/workContent';
import { Timeline } from './Timeline';
import { SectionHeader } from '../shared/SectionHeader';

const WorkExperience: React.FC = () => {
    const reduceMotionPreference = useReducedMotion();
    const shouldReduceMotion = Boolean(reduceMotionPreference);

    return (
        <section
            id="work"
            className="py-24 md:py-32 w-full bg-background text-foreground"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header - Matching About Section Style */}
                <SectionHeader 
                    number="03." 
                    title="Work Experience" 
                    className="mb-16" 
                />

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
