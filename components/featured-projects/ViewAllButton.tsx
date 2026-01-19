'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const ViewAllButton = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full flex justify-center mt-20 md:mt-32"
    >
        <Link
            href="/blogs"
            prefetch
            className="group relative inline-flex items-center gap-3 py-2"
        >
            <span className="font-urbanist font-bold text-lg md:text-xl uppercase tracking-widest text-foreground transition-colors duration-300 group-hover:text-accent">
                All Projects
            </span>
            
            <ArrowRightIcon className="w-5 h-5 text-foreground transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent" />
            
            {/* Underline animation */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
        </Link>
    </motion.div>
);
