"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimationControls } from 'framer-motion';
import { workExperienceData, TimelineItemData } from '@/data/workContent';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { fadeInUpVariants, fadeInVariants } from '@/lib/animations/variants';

const WorkExperience: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="work"
            className="py-24 flex items-center justify-center min-h-screen px-8 md:px-0 bg-white text-black"
        >
            <div className="w-full max-w-3xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    Work Experience.
                </motion.h2>
                <motion.p
                    className="text-lg md:text-md text-gray-600 text-center mb-12 leading-relaxed"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    Some of the gigs that taught me how to ship fast without cutting the good corners and how to keep teams looped in so momentum stays loud from kickoff to ship day.
                </motion.p>
                <Timeline items={workExperienceData} mainControls={mainControls} />
            </div>
        </section>
    );
};

const Timeline: React.FC<{ items: TimelineItemData[], mainControls: AnimationControls }> = ({ items, mainControls }) => (
    <motion.div
        className="relative border-l-2 border-gray-300 ml-1 md:ml-3"
        variants={fadeInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
    >
        {items.map((item, index) => (
            <div key={index} className="relative">
                <div className="absolute w-2 md:w-3 h-2 md:h-3 bg-gray-300 rounded-full mt-[14px] -left-[5px] md:-left-[7px]" />
                <motion.div
                    className="mb-6 md:mb-8 ml-4 md:ml-6"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.75 + index * 0.2 }}
                >
                    <h3 className="text-lg md:text-xl font-semibold">{item.date}</h3>
                    <div className="flex items-start mt-2">
                        <div className="flex-grow pr-4">
                            <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
                            <h5 className="text-sm md:text-base text-gray-600 mb-2">{item.company}</h5>
                            <ul className="space-y-1.5 text-sm md:text-base">
                                {item.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ml-4 flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src={item.imageSrc}
                                alt={item.company}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        ))}
    </motion.div>
);

export default WorkExperience;
