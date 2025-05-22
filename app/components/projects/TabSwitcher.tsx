'use client';

import { motion } from 'framer-motion';

interface TabSwitcherProps {
    activeTab: 'projects' | 'certifications';
    onTabChange: (tab: 'projects' | 'certifications') => void;
}

export default function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
    return (
        <div className="flex justify-center w-full mb-12">
            <div className="relative flex bg-neutral-900 rounded-xl p-1">
                {['projects', 'certifications'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab as 'projects' | 'certifications')}
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
                    </button>
                ))}
            </div>
        </div>
    );
} 