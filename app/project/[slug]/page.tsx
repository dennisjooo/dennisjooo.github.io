import { projects } from '../../data/projects';
import { createUrlSlug } from '../../utils/urlHelpers';
import ProjectPageClient from './ProjectPageClient';
import BackToTop from '../../components/BackToTop';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: createUrlSlug(project.title),
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => createUrlSlug(p.title) === params.slug);

    if (!project) {
        return <div className="text-center py-16">Project not found</div>;
    }

    return (
        <>
            <ProjectPageClient project={project} />
            <BackToTop />
        </>
    );
}
