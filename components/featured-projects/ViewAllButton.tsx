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
            href="/blogs"
            prefetch
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border transition-all duration-300 transform hover:scale-105"
            style={{
                borderColor: 'var(--default-border)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-border)';
                e.currentTarget.style.boxShadow = '0 0 15px var(--accent-shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--default-border)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            View All Projects and More.
            <ArrowUpRightIcon className="w-4 h-4" />
        </Link>
    </motion.div>
);
