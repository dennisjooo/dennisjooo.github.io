'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsList from '../components/projects/ProjectsList';
import CertificationsList from '../components/projects/CertificationsList';
import TabSwitcher from '../components/projects/TabSwitcher';

export default function ProjectsAndCertificationsPage() {
    const [activeTab, setActiveTab] = useState<'projects' | 'certifications'>('projects');

    return (
        <section
            id='projects-and-certifications'
            className='flex flex-col min-h-screen py-16 bg-black text-white'
        >
            <div className="container max-w-7xl mx-auto px-8 pt-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl mb-8 text-center font-bold"
                >
                    Projects & Certifications
                </motion.h1>

                <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

                <div className="max-w-7xl mx-auto min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'projects' ? (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectsList />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="certifications"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <CertificationsList />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
