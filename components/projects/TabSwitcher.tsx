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
            className="flex justify-center w-full mb-12"
        >
            <div className="relative flex bg-neutral-900 rounded-xl p-1">
                {['projects', 'certifications'].map((tab) => (
                    <motion.button
                        key={tab}
                        onClick={() => onTabChange(tab as TabType)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className={`
                            relative z-10 px-5 sm:px-8 py-2
                            text-sm font-medium capitalize 
                            transition-colors duration-300 whitespace-nowrap
                            ${activeTab === tab ? 'text-black' : 'text-white hover:text-neutral-300'}
                        `}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="tab-background"
                                className="absolute inset-0 bg-white rounded-lg"
                                style={{ zIndex: -1 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
} 