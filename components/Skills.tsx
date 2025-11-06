"use client";

import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';
import { skillIcons } from '@/data/skillContent';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/hooks/useAnimateOnScroll';
import { fadeInUpVariants } from '@/lib/animations/variants';

const IconCloud = dynamic(() => import('./IconCloud'), {
    ssr: false,
    loading: () => <Spinner />
});

const Skills: React.FC = () => {
    const { ref, mainControls } = useAnimateOnScroll();
    const [cloudMode, setCloudMode] = useState<'light' | 'dark'>('dark');

    return (
        <section ref={ref} id="skills" className="relative flex min-h-screen items-center justify-center px-6 py-24">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_55%)]" />
            <div className="container relative mx-auto flex max-w-5xl flex-col items-center text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-white"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8 }}
                >
                    Skills.
                </motion.h2>
                <motion.p
                    className="mt-4 max-w-2xl text-sm text-zinc-400 md:text-base"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    A constantly evolving stack of tools, frameworks, and languages that I reach for when experimenting and shipping ideas.
                </motion.p>
                <motion.div
                    className="mt-10 flex flex-col items-center gap-6"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-zinc-400">
                        <span className="text-[0.65rem] text-zinc-500">Icon tone</span>
                        <div className="flex overflow-hidden rounded-full border border-white/10">
                            {(['dark', 'light'] as const).map((mode) => (
                                <button
                                    key={mode}
                                    type="button"
                                    aria-pressed={cloudMode === mode}
                                    onClick={() => setCloudMode(mode)}
                                    className={`px-3 py-1 text-[0.65rem] font-medium transition-colors ${
                                        cloudMode === mode
                                            ? 'bg-white text-black'
                                            : 'bg-transparent text-zinc-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {mode === 'dark' ? 'White' : 'Black'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Suspense fallback={<div className="flex h-64 w-full items-center justify-center"><Spinner /></div>}>
                        <IconCloud iconSlugs={skillIcons} colorMode={cloudMode} />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;