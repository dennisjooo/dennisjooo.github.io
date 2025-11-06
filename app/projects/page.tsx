import type { Metadata } from 'next';
import { BackToTop } from '@/components/shared';
import { ProjectsTabs } from '@/components/projects/ProjectsTabs';

export const metadata: Metadata = {
    title: "Projects & Certifications | Dennis' Portfolio",
    description: "Explore Dennis' highlighted projects and professional certifications.",
};

export default function ProjectsAndCertificationsPage() {
    return (
        <section
            id='projects-and-certifications'
            className='flex flex-col min-h-screen py-16 bg-white dark:bg-black text-gray-900 dark:text-white'
        >
            <ProjectsTabs />
            <BackToTop />
        </section>
    );
}
