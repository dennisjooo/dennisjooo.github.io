'use client';

import { motion, AnimationControls } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import { fadeInUpVariants } from '@/lib/animations/variants';

interface ScrollButtonProps {
    onClick: () => void;
    mainControls: AnimationControls;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick, mainControls }) => (
    <motion.button
        onClick={onClick}
        className="absolute bottom-8"
        aria-label="Scroll to About section"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={mainControls}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
    >
        <motion.div
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <BsChevronDown className="text-foreground text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
        </motion.div>
    </motion.button>
);
