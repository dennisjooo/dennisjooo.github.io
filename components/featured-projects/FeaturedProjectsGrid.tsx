'use client';

import { motion } from 'framer-motion';
import { BentoGrid, BentoCard } from '@/components/bento';
import { createUrlSlug } from '@/lib/utils/urlHelpers';
import { formatProjectDate, truncateProjectDescription } from '@/lib/utils/projectFormatting';
import { Blog } from '@/data/blogs/types';

interface FeaturedProjectsGridProps {
    projects: Blog[];
}

export const FeaturedProjectsGrid: React.FC<FeaturedProjectsGridProps> = ({ projects }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex items-center"
    >
        <BentoGrid className="w-full mx-auto grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(({ title, description, date, imageUrl }, index) => (
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
                        href={`/blogs/${createUrlSlug(title)}`}
                        cta="View Project"
                        date={formatProjectDate(date, true)}
                        imageUrl={imageUrl}
                    />
                </motion.div>
            ))}
        </BentoGrid>
    </motion.div>
);
