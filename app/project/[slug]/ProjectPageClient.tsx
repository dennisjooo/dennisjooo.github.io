'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import ProjectContent from '../../components/projects/ProjectContent';
import ProjectLinks from '../../components/projects/ProjectLinks';
import ProjectDescription from '../../components/projects/ProjectDescription';

export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <section
            id='projects'
            className='flex flex-col items-center justify-start min-h-screen pt-24 pb-16 px-2 sm:px-6 md:px-8 bg-black text-white'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-4xl mx-auto py-4 px-8"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <Link href="/projects" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
                        <i className="bi bi-arrow-left mr-2"></i>
                        Back to Projects
                    </Link>
                </motion.div>
                <header className="mb-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-neutral-400"
                    >
                        {project.date}
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
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] mb-6 bg-white rounded-lg overflow-hidden"
        >
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
            />
        </motion.div>
    );
}
