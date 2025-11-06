"use client";

import { AnimatePresence, motion } from "framer-motion";
import CertificationsList from "@/components/projects/CertificationsList";
import ProjectsList from "@/components/projects/ProjectsList";
import TabSwitcher from "@/components/projects/TabSwitcher";
import { useTabState } from "@/lib/hooks/useTabState";
import { tabContentVariants } from "@/lib/animations/variants";

export function ProjectsTabs() {
    const { activeTab, setActiveTab, mounted } = useTabState();

    return (
        <div
            className={`container max-w-7xl mx-auto px-8 pt-16 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"
                }`}
        >
            <h1 className="text-3xl lg:text-4xl mb-6 text-center font-bold text-gray-900 dark:text-white">
                Projects & Certifications.
            </h1>
            <p className="text-lg md:text-md text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                Browse the builds I&apos;ve been nerding out on lately alongside the creds backing them up.<br />Tap around, steal ideas, and shout if you want the behind-the-scenes tour.
            </p>

            <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="max-w-7xl mx-auto min-h-[50vh] mt-8">
                <AnimatePresence mode="wait">
                    {activeTab === "projects" ? (
                        <motion.div key="projects" {...tabContentVariants}>
                            <ProjectsList />
                        </motion.div>
                    ) : (
                        <motion.div key="certifications" {...tabContentVariants}>
                            <CertificationsList />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

