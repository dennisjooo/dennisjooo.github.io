'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { BentoGrid, BentoCard } from './BentoComponents';
import { createUrlSlug } from '../utils/urlHelpers';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    blogPost: string;
    date: string;
    links: Array<{
        text: string;
        url: string;
    }>;
}

interface FeaturedProjectsProps {
    projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
    // Select the 3 most recent/featured projects
    const featuredProjects = projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    };

    const truncateDescription = (description: string, maxLength: number = 120) => {
        if (description.length <= maxLength) return description;
        return description.slice(0, maxLength).trim() + '...';
    };

    return (
        <section id="projects" className="min-h-screen py-8 sm:py-20 bg-black text-white flex flex-col">
            <div className="container max-w-7xl mx-auto px-4 sm:px-8 flex-1 flex flex-col">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Projects.
                    </h2>
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
                                    className="col-span-1 h-[350px] md:h-[480px]"
                                    description={truncateDescription(description)}
                                    href={`/project/${createUrlSlug(title)}`}
                                    cta="View Project"
                                    date={formatDate(date)}
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
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
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