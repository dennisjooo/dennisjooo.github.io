'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface ParallaxConfig {
    damping?: number;
    stiffness?: number;
    foregroundRange?: [number, number];
    backgroundRange?: [number, number];
}

interface ParallaxResult {
    mounted: boolean;
    foreground: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
    background: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
}

const DEFAULT_CONFIG: Required<ParallaxConfig> = {
    damping: 30,
    stiffness: 200,
    foregroundRange: [40, -40],
    backgroundRange: [-20, 20],
};

export function useParallax(config: ParallaxConfig = {}): ParallaxResult {
    const {
        damping,
        stiffness,
        foregroundRange,
        backgroundRange,
    } = { ...DEFAULT_CONFIG, ...config };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping, stiffness };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Foreground transforms (inverted for depth effect)
    const fgX = useTransform(springX, [-0.5, 0.5], foregroundRange);
    const fgY = useTransform(springY, [-0.5, 0.5], foregroundRange);

    // Background transforms (slower, opposite direction)
    const bgX = useTransform(springX, [-0.5, 0.5], backgroundRange);
    const bgY = useTransform(springY, [-0.5, 0.5], backgroundRange);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth - 0.5);
            mouseY.set(e.clientY / innerHeight - 0.5);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return {
        mounted,
        foreground: { x: fgX, y: fgY },
        background: { x: bgX, y: bgY },
    };
}
