"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useInView
} from "framer-motion";
import { wrap } from "@/lib/utils/math";

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic number for the wrap logic.
   * Depending on how many children copies you have, you might need to adjust.
   * We typically wrap between -20% and -45% to ensure seamless looping
   * of 4 copies.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-10%" });
  const frameSkip = useRef(0);
  
  useAnimationFrame((t, delta) => {
    // Skip animation if not in view or user prefers reduced motion
    if (!isInView || prefersReducedMotion) return;

    // Throttle animation updates on mobile for better performance
    // Skip every other frame on slower devices
    frameSkip.current += 1;
    if (typeof window !== 'undefined' && window.innerWidth < 768 && frameSkip.current % 2 !== 0) {
      return;
    }

    // Cap delta to prevent large jumps on slow frames
    const cappedDelta = Math.min(delta, 50);
    let moveBy = directionFactor.current * baseVelocity * (cappedDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    const velocity = velocityFactor.get();
    if (velocity < 0) {
      directionFactor.current = -1;
    } else if (velocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocity;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full">
      <motion.div 
        className="flex whitespace-nowrap gap-8 md:gap-16 flex-nowrap transform-gpu backface-hidden" 
        style={{ x, willChange: isInView ? 'transform' : 'auto' }}
      >
        {/* Render 4 copies for seamless loop */}
        <span className="block mr-8 md:mr-16 flex-shrink-0">{children}</span>
        <span className="block mr-8 md:mr-16 flex-shrink-0">{children}</span>
        <span className="block mr-8 md:mr-16 flex-shrink-0">{children}</span>
        <span className="block mr-8 md:mr-16 flex-shrink-0">{children}</span>
      </motion.div>
    </div>
  );
}
