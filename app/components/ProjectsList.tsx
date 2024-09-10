"use client";

import React, { useMemo } from 'react';
import { BentoGrid, BentoCard } from './BentoComponents';
import { projects } from '../data/projectContent';

export default function ProjectsList() {
    const sortedProjects = useMemo(() => 
        [...projects].sort((a, b) => b.id - a.id),
        []
    );

    return (
        <BentoGrid className="max-w-7xl mx-auto py-8">
            {sortedProjects.map(({ id, title, description, date }) => (
                <BentoCard
                    key={id}
                    name={title}
                    className="col-span-3 md:col-span-2 lg:col-span-1"
                    description={description}
                    href={`/project/${id}`}
                    cta="View Project"
                    date={date}
                />
            ))}
        </BentoGrid>
    );
}