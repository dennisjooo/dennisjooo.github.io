"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
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
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full">
      <motion.div 
        className="flex whitespace-nowrap gap-8 md:gap-16 flex-nowrap will-change-transform" 
        style={{ x }}
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
