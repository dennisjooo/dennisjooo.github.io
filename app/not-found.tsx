'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { GlitchText } from '@/components/not-found/GlitchText';
import { MatrixRainBackground } from '@/components/not-found/MatrixRainBackground';
import { TerminalPrompt } from '@/components/not-found/TerminalPrompt';
import { ERROR_MESSAGES } from '@/lib/constants/notFound';

export default function NotFound() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <MatrixRainBackground enabled={!shouldReduceMotion} />

            <motion.div
                className="relative z-10 flex flex-col items-center text-center px-4"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tighter"
                    initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <GlitchText>404</GlitchText>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground mt-2 mb-8"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.5 }}
                >
                    Page not found in this dimension
                </motion.p>

                <motion.div
                    className="w-full max-w-md mb-8"
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.7 }}
                >
                    <TerminalPrompt messages={ERROR_MESSAGES} />
                </motion.div>

                <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.9 }}
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-accent text-accent-foreground font-medium transition-all duration-300 hover:shadow-accent hover:scale-105"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                        Return to Safety
                    </Link>
                </motion.div>

                <motion.p
                    className="mt-12 text-sm text-muted-foreground/60 font-mono"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.2 }}
                >
                    // TODO: fix this page... eventually
                </motion.p>
            </motion.div>
        </section>
    );
}
