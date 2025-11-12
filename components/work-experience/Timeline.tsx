"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimationControls } from 'framer-motion';
import { TimelineItemData } from '@/data/workContent';
import { fadeInUpVariants, fadeInVariants } from '@/lib/animations/variants';

interface TimelineProps {
    items: TimelineItemData[];
    mainControls: AnimationControls;
    shouldReduceMotion: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ items, mainControls, shouldReduceMotion }) => (
    <motion.ol
        className="relative border-l-2 ml-1 md:ml-3"
        style={{ borderColor: 'var(--accent-border)' }}
        variants={fadeInVariants}
        initial="hidden"
        animate={mainControls}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
    >
        {items.map((item, index) => (
            <motion.li
                key={item.id}
                className="relative mb-10 pl-6 md:pl-8"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={
                    shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.5, delay: index * 0.1 }
                }
            >
                <span
                    aria-hidden="true"
                    className="absolute left-0 top-4 md:top-5 w-2 md:w-3 h-2 md:h-3 bg-gradient-accent rounded-full drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transform -translate-x-[calc(50%+1px)]"
                />
                <article>
                    <header className="flex items-start">
                        <div className="flex-grow pr-4">
                            <time className="block text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                {item.date}
                            </time>
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mt-2">
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2">
                                {item.company}
                            </p>
                        </div>
                        <div className="ml-4 flex-shrink-0 w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src={item.imageSrc}
                                alt={item.company}
                                width={64}
                                height={64}
                                sizes="(min-width: 768px) 64px, 48px"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </header>
                    <ul className="mt-3 space-y-1.5 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {item.responsibilities.map((responsibility, idx) => (
                            <li
                                key={idx}
                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 dark:before:text-gray-600"
                            >
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                </article>
            </motion.li>
        ))}
    </motion.ol>
);
