import { projects } from '../../data/projects';
import { createUrlSlug } from '../../utils/urlHelpers';
import ProjectPageClient from './ProjectPageClient';
import BackToTop from '../../components/BackToTop';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: createUrlSlug(project.title),
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => createUrlSlug(p.title) === slug);

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
