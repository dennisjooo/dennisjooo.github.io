'use client';

import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/data/aboutContent';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { fadeInUpVariants } from '@/lib/animations/variants';
import { AnimationControls } from 'framer-motion';

const About: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="about"
            className="relative flex min-h-screen w-full items-center justify-center px-6 py-24"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_65%)]" />
            <div className="container relative mx-auto w-full max-w-5xl">
                <motion.h2
                    className="text-left text-3xl font-semibold uppercase tracking-[0.25em] text-zinc-300 md:text-center md:text-4xl md:tracking-[0.35em]"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8 }}
                >
                    About
                </motion.h2>
                <motion.div
                    className="mt-12 grid gap-12 md:grid-cols-[minmax(220px,280px),1fr] md:items-start"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ProfileImage mainControls={mainControls} />
                    <AboutContent mainControls={mainControls} />
                </motion.div>
            </div>
        </section>
    );
};

const ProfileImage: React.FC<{ mainControls: AnimationControls }> = ({ mainControls }) => (
    <motion.div
        className="mb-10 w-full md:mb-0"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.4 }}
    >
        <Image
            src="/images/profile.webp"
            alt="Profile picture"
            width={300}
            height={300}
            className="mx-auto h-[220px] w-[220px] rounded-full border border-white/10 bg-white/5 object-cover shadow-[0_30px_80px_-45px_rgba(255,255,255,0.6)] md:h-[280px] md:w-[280px]"
        />
    </motion.div>
);

const AboutContent: React.FC<{ mainControls: AnimationControls }> = ({ mainControls }) => (
    <motion.div
        className="space-y-6 text-left text-base font-light text-zinc-300 md:border-l md:border-white/10 md:pl-8"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.6 }}
    >
        {Object.entries(aboutContent).map(([key, content], index) => (
            <motion.h5
                key={key}
                className="leading-relaxed text-zinc-400"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
                {content}
            </motion.h5>
        ))}
    </motion.div>
);

export default About;