'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientUnderlineProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const GradientUnderline: React.FC<GradientUnderlineProps> = ({
    children,
    className = '',
    delay = 0.5
}) => {
    return (
        <span className={`relative inline ${className}`}>
            <span className="relative z-[1]">{children}</span>
            <motion.span
                className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-accent rounded-full drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                style={{ transformOrigin: "left" }}
            />
        </span>
    );
};

export default GradientUnderline;
