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
            className="relative flex min-h-screen items-center justify-center px-6 py-24"
        >
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),transparent_55%)]" />
            <div className="container relative mx-auto w-full max-w-4xl">
                <motion.h2
                    className="text-left text-3xl font-semibold uppercase tracking-[0.25em] text-zinc-300 md:text-4xl md:text-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    Work Experience
                </motion.h2>
                <motion.p
                    className="mt-4 max-w-2xl text-sm text-zinc-400 md:mx-auto md:text-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    A timeline of the teams, products, and experiments that shaped how I build.
                </motion.p>
                <Timeline items={workExperienceData} mainControls={mainControls} />
            </div>
        </section>
    );
};

const Timeline: React.FC<{ items: TimelineItemData[], mainControls: AnimationControls }> = ({ items, mainControls }) => (
    <motion.div
        className="relative mt-12 pl-6 md:pl-10"
        variants={fadeInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.45 }}
    >
        <div className="absolute left-1 top-0 h-full w-px bg-white/10 md:left-2" />
        {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
                <motion.article
                    key={`${item.company}-${item.date}`}
                    className="relative mb-12 pl-6 md:pl-10"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.65 + index * 0.2 }}
                >
                    <span className="absolute left-[-9px] top-2 h-3 w-3 rounded-full border border-white/20 bg-white md:left-[-11px]" />
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className={`flex-1 space-y-3 pb-6 ${isLast ? '' : 'border-b border-white/10'}`}>
                            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">{item.date}</h3>
                            <div>
                                <h4 className="text-lg font-semibold text-white md:text-xl">{item.title}</h4>
                                <h5 className="text-sm text-zinc-400 md:text-base">{item.company}</h5>
                            </div>
                            <ul className="space-y-2 text-sm text-zinc-300 md:text-base">
                                {item.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="relative pl-5 text-left before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-500">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-shrink-0 self-start rounded-full border border-white/10 p-4">
                            <Image
                                src={item.imageSrc}
                                alt={item.company}
                                width={64}
                                height={64}
                                className="h-12 w-12 object-contain md:h-16 md:w-16"
                            />
                        </div>
                    </div>
                </motion.article>
            );
        })}
    </motion.div>
);

export default WorkExperience;
