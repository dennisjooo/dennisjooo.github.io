'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectsList from '../components/ProjectsList';
import CertificationsList from '../components/CertificationsList';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl mb-6 font-semibold"
    >
        {children}
    </motion.h2>
);

export default function ProjectsAndCertificationsPage() {
    return (
        <section
            id='projects-and-certifications'
            className='flex flex-col items-center justify-center min-h-screen py-16 bg-black text-white'
        >
            <div className="container mx-auto px-4 pt-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl mb-8 text-center font-bold"
                >
                    Projects & Certifications
                </motion.h1>

                <SectionTitle>Projects</SectionTitle>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <ProjectsList />
                </motion.div>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <SectionTitle>Certifications</SectionTitle>
                    <CertificationsList />
                </motion.div>
            </div>
        </section>
    );
}
