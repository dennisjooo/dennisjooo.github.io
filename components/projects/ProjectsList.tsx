import { BentoGrid, BentoCard } from '@/components/bento';
import { Blog, projects } from '@/data/blogs';
import { createUrlSlug } from '@/lib/utils/urlHelpers';
import { formatProjectDate } from '@/lib/utils/projectFormatting';

const allProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function ProjectsList({ type = 'project' }: { type?: 'project' | 'blog' }) {
    const filteredProjects = allProjects.filter((project) => project.type === type);

    return (
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(({ title, description, date, imageUrl, blogPost }: Blog) => (
                <BentoCard
                    key={`${title}_${date}`}
                    name={title}
                    className="col-span-1"
                    description={description}
                    href={`/blogs/${createUrlSlug(title)}`}
                    cta={type === 'project' ? "View Project" : "Read Post"}
                    date={formatProjectDate(date, true)}
                    imageUrl={imageUrl}
                    meta={type === 'blog' ? `${Math.ceil(blogPost.split(/\s+/).length / 200)} min read` : undefined}
                />
            ))}
        </BentoGrid>
    );
}
