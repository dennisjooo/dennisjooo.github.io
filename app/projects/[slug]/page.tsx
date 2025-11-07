import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToTop } from '@/components/shared';
import ProjectPageClient from './ProjectPageClient';
import { projects } from '@/data/projects';
import { createUrlSlug } from '@/lib/utils/urlHelpers';

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: ProjectPageProps,
): Promise<Metadata> {
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

export default async function Page({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => createUrlSlug(p.title) === slug);

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
