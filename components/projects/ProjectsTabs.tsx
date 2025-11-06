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
            className={`relative mx-auto w-full max-w-7xl transition-opacity duration-300 ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="px-4 py-12 md:px-0">
                <h1 className="text-center text-3xl font-semibold uppercase tracking-[0.25em] text-zinc-300 lg:text-4xl">
                    Projects &amp; Certifications
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-400 md:text-base">
                    Explore the builds I&apos;m most proud of and the credentials that back them up.
                </p>

                <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

                <div className="min-h-[50vh] border-t border-white/10 pt-12">
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
        </div>
    );
}
