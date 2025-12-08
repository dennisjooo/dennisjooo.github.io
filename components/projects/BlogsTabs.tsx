"use client";

import CertificationsList from "@/components/projects/CertificationsList";
import ProjectsList from "@/components/projects/ProjectsList";
import TabSwitcher from "@/components/projects/TabSwitcher";
import { tabContentVariants } from "@/lib/animations/variants";
import { useTabState } from "@/lib/hooks/useTabState";
import { AnimatePresence, motion } from "framer-motion";
import GradientUnderline from '@/components/shared/GradientUnderline';

import { projects } from "@/data/blogs";
import { certifications } from "@/data/certificationContent";
import { TabType } from "./TabSwitcher";
import { useMemo } from "react";
import { useEffect } from "react";

export function BlogsTabs() {
    const { activeTab, setActiveTab, mounted } = useTabState();

    const hasBlog = projects.length > 0;
    const hasCerts = certifications.length > 0;

    const availableTabs: TabType[] = useMemo(() => [
        hasBlog ? 'blog' : null,
        hasCerts ? 'certifications' : null,
    ].filter((t): t is TabType => t !== null), [hasBlog, hasCerts]);

    useEffect(() => {
        if (mounted && !availableTabs.includes(activeTab) && availableTabs.length > 0) {
            setActiveTab(availableTabs[0]);
        }
    }, [mounted, activeTab, availableTabs, setActiveTab]);

    const tabCaptions: Record<TabType, string> = {
        blog: "Projects, tutorials, and experiments I've been building and writing about.",
        certifications: "Professional certifications and credentials that validate my expertise."
    };

    return (
        <div
            className={`container max-w-7xl mx-auto px-8 pt-16 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"
                }`}
        >
            <h1 className="text-3xl md:text-4xl mb-6 text-center font-bold text-gray-900 dark:text-white">
                <GradientUnderline>
                    Blog & Certifications
                </GradientUnderline>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                {tabCaptions[activeTab]}
            </p>

            {availableTabs.length > 0 && (
                <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} tabs={availableTabs} />
            )}

            {availableTabs.length > 0 && (
                <div className="max-w-7xl mx-auto min-h-[50vh] mt-8">
                    {mounted ? (
                        <AnimatePresence mode="wait">
                            {activeTab === "blog" ? (
                                <motion.div key="blog" {...tabContentVariants}>
                                    <ProjectsList type="all" />
                                </motion.div>
                            ) : (
                                <motion.div key="certifications" {...tabContentVariants}>
                                    <CertificationsList />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ) : (
                        <motion.div key="blog" {...tabContentVariants}>
                            <ProjectsList type="all" />
                        </motion.div>
                    )}
                </div>
            )}
        </div>
    );
}

