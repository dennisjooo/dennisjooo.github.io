"use client";

import React, { useMemo } from 'react';
import { BentoGrid, BentoCard } from '../BentoComponents';
import { Project, projects } from '../../data/projects';
import { createUrlSlug } from '../../utils/urlHelpers';

export default function ProjectsList() {
    const sortedProjects = useMemo(() =>
        [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        []
    );

    return (
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {sortedProjects.map(({ title, description, date }: Project) => (
                <BentoCard
                    key={`${title}_${date}`}
                    name={title}
                    className="col-span-1"
                    description={description}
                    href={`/project/${createUrlSlug(title)}`}
                    cta="View Project"
                    date={date}
                />
            ))}
        </BentoGrid>
    );
}
