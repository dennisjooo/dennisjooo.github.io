"use client";

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { BentoGrid, BentoCard } from '@/components/BentoComponents';
import { createUrlSlug } from '@/lib/utils/urlHelpers';
import { sortProjectsByDate, formatProjectDate, truncateProjectDescription } from '@/lib/utils/projectFormatting';
import { Project } from '@/data/projects/types';

interface FeaturedProjectsProps {
    projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
    const featuredProjects = useMemo(
        () => sortProjectsByDate(projects).slice(0, 3),
        [projects]
    );

    return (
        <section id="projects" className="relative flex min-h-screen items-center justify-center px-6 py-24">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_65%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(200deg,rgba(255,255,255,0.03),transparent_55%)]" />
            <div className="container relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-zinc-300 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-sm text-zinc-400 md:text-base">
                        A rotating selection of experiments, shipped ideas, and things I couldn&apos;t let go of.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <BentoGrid className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        {featuredProjects.map(({ title, description, date, imageUrl }, index) => (
                            <motion.div
                                key={`${title}_${date}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <BentoCard
                                    name={title}
                                    className="col-span-1 h-[340px] md:h-[420px]"
                                    description={truncateProjectDescription(description)}
                                    href={`/projects/${createUrlSlug(title)}`}
                                    cta="View Project"
                                    date={formatProjectDate(date)}
                                    imageUrl={imageUrl}
                                />
                            </motion.div>
                        ))}
                    </BentoGrid>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 md:px-8"
                    >
                        View Everything
                        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
