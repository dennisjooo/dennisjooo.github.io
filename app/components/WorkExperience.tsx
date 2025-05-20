"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimationControls } from 'framer-motion';
import { workExperienceData, TimelineItemData } from '../data/workContent';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { fadeInUpVariants, fadeInVariants } from '../animations/variants';

const WorkExperience: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();

    return (
        <section ref={ref} id="work" className="py-16 md:py-24 flex items-center justify-center min-h-screen px-8 md:px-0 bg-black text-white">
            <div className="w-full max-w-3xl">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    Work Experience.
                </motion.h2>
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
            <TimelineItem key={index} {...item} index={index} mainControls={mainControls} />
        ))}
    </motion.div>
);

const TimelineItem: React.FC<TimelineItemData & { index: number, mainControls: AnimationControls }> = ({ date, title, company, imageSrc, responsibilities, index, mainControls }) => (
    <motion.div
        className="mb-6 md:mb-8 ml-4 md:ml-6"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 + index * 0.2 }}
    >
        <TimelineDot />
        <h3 className="text-lg md:text-xl font-semibold">{date}</h3>
        <div className="flex items-start mt-2">
            <TimelineContent title={title} company={company} responsibilities={responsibilities} />
            <CompanyLogo src={imageSrc} alt={company} />
        </div>
    </motion.div>
);

const TimelineDot: React.FC = () => (
    <div className="absolute w-2 md:w-3 h-2 md:h-3 bg-gray-300 rounded-full mt-2 -left-[5px] md:-left-[7px]"></div>
);

const TimelineContent: React.FC<{ title: string; company: string; responsibilities: string[] }> = ({ title, company, responsibilities }) => (
    <div className="flex-grow pr-4">
        <h4 className="text-base md:text-lg font-semibold">{title}</h4>
        <h5 className="text-sm md:text-base text-gray-600 mb-2">{company}</h5>
        <ul className="space-y-1.5 text-sm md:text-base">
            {responsibilities.map((item, index) => (
                <li key={index} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const CompanyLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="ml-4 flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
        <Image
            src={src}
            alt={alt}
            width={64}
            height={64}
            className="object-contain"
        />
    </div>
);

export default WorkExperience;
