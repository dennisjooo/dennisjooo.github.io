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
        <section id="projects" className="py-24 flex items-center justify-center min-h-screen px-8 md:px-0">
            <div className="container max-w-7xl mx-auto px-8 sm:px-8 flex-1 flex flex-col">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Featured Projects.
                    </h2>
                    <p className="text-lg md:text-md text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        A highlight reel of builds I loved obsessing over.  Mostly scrappy experiments that makes me cherish the good old days.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex items-center"
                >
                    <BentoGrid className="w-full mx-auto grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {featuredProjects.map(({ title, description, date, imageUrl }, index) => (
                            <motion.div
                                key={`${title}_${date}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <BentoCard
                                    name={title}
                                    className="col-span-1 h-[320px] md:h-[440px]"
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

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-6 sm:mt-10"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-6 bg-white text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                        View All Projects and More.
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
