'use client';

import { createUrlSlug } from '@/lib/utils/urlHelpers';
import { formatProjectDate } from '@/lib/utils/projectFormatting';
import { Blog } from '@/data/blogs/types';
import { FeaturedProjectCard } from './FeaturedProjectCard';

interface FeaturedProjectsGridProps {
    projects: Blog[];
}

export const FeaturedProjectsGrid: React.FC<FeaturedProjectsGridProps> = ({ projects }) => (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map(({ title, description, date, imageUrl }, index) => (
            <div 
                key={`${title}_${date}`}
                className="w-full"
            >
                <FeaturedProjectCard
                    title={title}
                    description={description}
                    slug={createUrlSlug(title)}
                    date={formatProjectDate(date, true)}
                    imageUrl={imageUrl}
                    index={index}
                />
            </div>
        ))}
    </div>
);
