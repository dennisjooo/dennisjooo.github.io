'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import ProjectContent from '@/components/projects/ProjectContent';
import ProjectLinks from '@/components/projects/ProjectLinks';
import ProjectDescription from '@/components/projects/ProjectDescription';
import { BsArrowLeft } from "react-icons/bs";

export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <section
            id='projects'
            className='relative flex min-h-screen flex-col items-center justify-start px-4 pb-16 pt-28 sm:px-6 md:px-10'
        >
            <div className='absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]' />
            <div className='absolute inset-0 -z-10 bg-[linear-gradient(210deg,rgba(255,255,255,0.05),transparent_55%)]' />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-0"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-zinc-300 transition-all duration-300 hover:border-white/40 hover:text-white"
                    >
                        <BsArrowLeft className="text-sm" />
                        Back
                    </Link>
                </motion.div>
                <header className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-semibold text-white sm:text-4xl"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500 sm:text-xs"
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
            className="relative mb-8 flex h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 sm:h-[380px] md:h-[420px]"
        >
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                className="p-6"
            />
        </motion.div>
    );
}
