'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const gradientVariants = useMemo(() => ({
        hidden: { opacity: 0, scaleY: 0.15 },
        visible: { opacity: 0.7, scaleY: 1 }
    }), []);

    const textVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 }
    }), []);

    return (
        <footer ref={ref} className="relative px-8 py-16 bg-white dark:bg-black overflow-hidden">
            {/* Sun gradient - positioned to show just the top curve (horizon effect) */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-[50%] w-[120%] rounded-full pointer-events-none"
                variants={gradientVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
                style={{
                    transformOrigin: 'center bottom',
                    height: '130%',
                    background: `radial-gradient(ellipse at center,
                        var(--gradient-accent-from) 0%,
                        var(--gradient-accent-from) 15%,
                        var(--gradient-accent-via) 40%,
                        var(--gradient-accent-to) 60%,
                        transparent 80%)`,
                    filter: 'blur(30px)',
                    backgroundImage: `radial-gradient(ellipse at center,
                        var(--gradient-accent-from) 0%,
                        var(--gradient-accent-from) 15%,
                        var(--gradient-accent-via) 40%,
                        var(--gradient-accent-to) 60%,
                        transparent 80%),
                        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`
                }}
            />
            <motion.p
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300 z-10"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                © Dennis Jonathan {new Date().getFullYear()}
            </motion.p>
        </footer>
    );
};

export default Footer;
