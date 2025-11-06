"use client";
import { BentoGrid, BentoCard } from '@/components/BentoComponents';
import { Project, projects } from '@/data/projects';
import { createUrlSlug } from '@/lib/utils/urlHelpers';

const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function ProjectsList() {
    return (
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
