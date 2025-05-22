'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsList from '../components/projects/ProjectsList';
import CertificationsList from '../components/projects/CertificationsList';
import TabSwitcher from '../components/projects/TabSwitcher';
import { useTabState } from '../hooks/useTabState';
import BackToTop from '../components/BackToTop';

const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
};

function ProjectsContent() {
    const { activeTab, setActiveTab, mounted } = useTabState();

    return (
        <div className={`container max-w-7xl mx-auto px-8 pt-16 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl mb-8 text-center font-bold">
                Projects & Certifications
            </h1>

            <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="max-w-7xl mx-auto min-h-[50vh]">
                <AnimatePresence mode="wait">
                    {activeTab === 'projects' ? (
                        <motion.div
                            key="projects"
                            {...contentVariants}
                        >
                            <ProjectsList />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="certifications"
                            {...contentVariants}
                        >
                            <CertificationsList />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function ProjectsAndCertificationsPage() {
    return (
        <section
            id='projects-and-certifications'
            className='flex flex-col min-h-screen py-16 bg-black text-white'
        >
            <ProjectsContent />
            <BackToTop />
        </section>
    );
}
