import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from '@/components/BackToTop';
import ProjectPageClient from './ProjectPageClient';
import { projects } from '@/data/projects';
import { createUrlSlug } from '@/lib/utils/urlHelpers';

type ProjectPageProps = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: ProjectPageProps,
): Promise<Metadata> {
    const project = projects.find((p) => createUrlSlug(p.title) === params.slug);

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

export default function Page({ params }: ProjectPageProps) {
    const project = projects.find((p) => createUrlSlug(p.title) === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <ProjectPageClient project={project} />
            <BackToTop />
        </>
    );
}
