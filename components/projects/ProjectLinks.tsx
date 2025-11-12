'use client';

import { motion, useAnimation } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { useEffect } from 'react';

interface Link {
    url: string;
    text: string;
}

interface ProjectLinksProps {
    links: Link[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
    return (
        <nav className="mt-8 flex flex-wrap gap-3">
            {links.map((link, index) => (
                <ProjectLink key={index} index={index} {...link} />
            ))}
        </nav>
    );
}

function ProjectLink({ url, text, index }: Link & { index: number }) {
    const controls = useAnimation();
    const isGitHubLink = url.toLowerCase().includes('github.com');

    useEffect(() => {
        // Set initial state first, then animate
        controls.set({ opacity: 0, y: 10 });
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: index * 0.1 }
        });
    }, [controls, index]);

    return (
        <motion.a
            href={url}
            initial={{ opacity: 1, y: 0 }}
            animate={controls}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
        >
            {text}
            {isGitHubLink ? (
                <BsGithub className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
            ) : (
                <HiExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
            )}
        </motion.a>
    );
}