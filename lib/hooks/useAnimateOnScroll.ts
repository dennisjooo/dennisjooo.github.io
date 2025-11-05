import { useRef, useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';

export const useAnimateOnScroll = (once = true) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return { ref, mainControls };
};