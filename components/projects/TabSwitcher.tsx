'use client';

import { motion } from 'framer-motion';

type TabType = 'projects' | 'certifications';

interface TabSwitcherProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

export default function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-12 mt-10 flex w-full justify-center"
        >
            <div className="relative flex rounded-full border border-white/10 bg-white/5 p-1">
                {['projects', 'certifications'].map((tab) => (
                    <motion.button
                        key={tab}
                        onClick={() => onTabChange(tab as TabType)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        className={`
                            relative z-10 px-6 py-2 text-xs font-medium uppercase tracking-[0.3em] transition-colors duration-300
                            ${activeTab === tab ? 'text-black' : 'text-zinc-200 hover:text-white'}
                        `}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="tab-background"
                                className="absolute inset-0 rounded-full bg-white"
                                style={{ zIndex: -1 }}
                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}