'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { motion } from 'framer-motion';

interface ProjectDescriptionProps {
    description: string;
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
    const parts = description.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/);

    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl mb-6 italic"
        >
            {parts.map((part, index) => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                    return <BlockMath key={index} math={part.slice(2, -2).trim()} />;
                }
                if (part.startsWith('$') && part.endsWith('$')) {
                    return <InlineMath key={index} math={part.slice(1, -1).trim()} />;
                }
                return <span key={index}>{part}</span>;
            })}
        </motion.p>
    );
} 