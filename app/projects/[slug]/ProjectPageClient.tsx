'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Project } from '@/data/projects';
import ProjectLinks from '@/components/projects/ProjectLinks';
import ProjectDescription from '@/components/projects/ProjectDescription';
import { BsArrowLeft } from "react-icons/bs";
import { formatProjectDate } from '@/lib/utils/projectFormatting';
import { GradientUnderline } from '@/components/shared';

const ProjectContent = dynamic(() => import('@/components/projects/ProjectContent'), {
    loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-800 h-96 rounded-lg" />
});


export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <section
            id='projects'
            className='flex flex-col items-center justify-start min-h-screen py-24 px-8 bg-white dark:bg-black text-gray-900 dark:text-white'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-4xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <Link href="/projects" className="inline-flex items-center text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <BsArrowLeft className="mr-2" />
                        Back to Projects
                    </Link>
                </motion.div>
                <header className="mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        <GradientUnderline delay={0.3}>
                            {project.title}
                        </GradientUnderline>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-neutral-400"
                    >
                        {formatProjectDate(project.date)}
                    </motion.p>
                </header>
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <ProjectDescription description={project.description} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-12"
                >
                    <ProjectContent content={project.blogPost} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <ProjectLinks links={project.links} />
                </motion.div>
            </motion.div>
        </section>
    );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            setAspectRatio(img.naturalWidth / img.naturalHeight);
        };
        img.src = src;
    }, [src]);

    return (
        <PhotoProvider maskOpacity={0.85} speed={() => 280}>
            <PhotoView src={src}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full mb-6 overflow-hidden rounded-2xl max-h-[400px] sm:max-h-[500px] md:max-h-[600px] cursor-zoom-in"
                    style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : { minHeight: '200px' }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                        Click to zoom
                    </span>
                </motion.div>
            </PhotoView>
        </PhotoProvider>
    );
}
