import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import { ProjectsTabs } from '@/components/projects/ProjectsTabs';

export const metadata: Metadata = {
    title: "Projects & Certifications | Dennis' Portfolio",
    description: "Explore Dennis' highlighted projects and professional certifications.",
};

export default function ProjectsAndCertificationsPage() {
    return (
        <section
            id='projects-and-certifications'
            className='relative flex min-h-screen flex-col items-center justify-start px-6 py-24'
        >
            <div className='absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]' />
            <div className='absolute inset-0 -z-10 bg-[linear-gradient(200deg,rgba(255,255,255,0.05),transparent_55%)]' />
            <div className='relative w-full flex-1'>
                <ProjectsTabs />
            </div>
            <BackToTop />
        </section>
    );
}
