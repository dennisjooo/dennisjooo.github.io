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
            className={`container max-w-7xl mx-auto px-8 pt-16 transition-opacity duration-300 ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
        >
            <h1 className="text-3xl lg:text-4xl mb-8 text-center font-bold">
                Projects & Certifications.
            </h1>

            <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="max-w-7xl mx-auto min-h-[50vh]">
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
