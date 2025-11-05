"use client";

import React, { useMemo } from 'react';
import { BentoGrid, BentoCard } from '@/components/BentoComponents';
import { Project, projects } from '@/data/projects';
import { createUrlSlug } from '@/lib/utils/urlHelpers';

export default function ProjectsList() {
    const sortedProjects = useMemo(() =>
        [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        []
    );

    return (
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {sortedProjects.map(({ title, description, date, imageUrl }: Project) => (
                <BentoCard
                    key={`${title}_${date}`}
                    name={title}
                    className="col-span-1"
                    description={description}
                    href={`/projects/${createUrlSlug(title)}`}
                    cta="View Project"
                    date={date}
                    imageUrl={imageUrl}
                />
            ))}
        </BentoGrid>
    );
}
