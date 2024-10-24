import React from 'react';
import ProjectsList from '../components/ProjectsList';
import CertificationsList from '../components/CertificationsList';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl mb-6 font-semibold">{children}</h2>
);

export default function ProjectsAndCertificationsPage() {
  return (
    <section id='projects-and-certifications' className='flex flex-col items-center justify-center min-h-screen py-16 bg-black text-white'>
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-4xl mb-8 text-center font-bold">Projects & Certifications</h1>
        
        <SectionTitle>Projects</SectionTitle>
        <ProjectsList />
        
        <div className="mt-12">
          <SectionTitle>Certifications</SectionTitle>
          <CertificationsList />
        </div>
      </div>
    </section>
  );
}
