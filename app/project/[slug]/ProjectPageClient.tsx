'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import ProjectContent from '../../components/ProjectContent';
import ProjectLinks from '../../components/ProjectLinks';

export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <section
            id='projects'
            className='flex flex-col items-center justify-start min-h-screen pt-16 px-4 sm:px-6 md:px-8 bg-black text-white'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-4xl mx-auto py-8"
            >
                <header>
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
                        className="text-base sm:text-lg md:text-xl text-neutral-400 mb-4"
                    >
                        {project.date}
                    </motion.p>
                </header>
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base sm:text-lg md:text-xl mb-6"
                >
                    {project.description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
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
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-6 bg-white rounded-lg overflow-hidden"
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
