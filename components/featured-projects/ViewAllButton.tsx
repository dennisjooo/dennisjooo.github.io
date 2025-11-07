'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export const ViewAllButton = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-8"
    >
        <Link
            href="/projects"
            prefetch
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-base"
        >
            View All Projects and More.
            <ArrowUpRightIcon className="w-4 h-4" />
        </Link>
    </motion.div>
);
