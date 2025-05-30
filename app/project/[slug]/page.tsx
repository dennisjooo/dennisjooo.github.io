import { projects } from '../../../data/projects';
import { createUrlSlug } from '../../utils/urlHelpers';
import ProjectPageClient from './ProjectPageClient';
import BackToTop from '../../components/BackToTop';
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => createUrlSlug(p.title) === slug);

    if (!project) {
        return {
            title: "Project Not Found | Dennis' Portfolio",
        };
    }

    return {
        title: `${project.title} | Dennis' Portfolio`,
    };
}

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
