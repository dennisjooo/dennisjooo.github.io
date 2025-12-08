'use client';

import { motion } from 'framer-motion';
import React from 'react';

export type TabType = 'blog' | 'certifications';

interface TabSwitcherProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
    tabs: TabType[];
}

export default function TabSwitcher({ activeTab, onTabChange, tabs }: TabSwitcherProps) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center w-full mb-12"
        >
            <div className="relative flex rounded-full border" style={{ borderColor: 'var(--default-border)' }}>
                {tabs.map((tab, index) => (
                    <React.Fragment key={tab}>
                        <motion.button
                            onClick={() => onTabChange(tab)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={`
                                relative z-10 px-5 sm:px-8 py-2.5
                                text-sm font-medium capitalize
                                transition-all duration-300 whitespace-nowrap
                                ${index === 0 ? 'rounded-l-full' : ''}
                                ${index === tabs.length - 1 ? 'rounded-r-full' : ''}
                                ${activeTab === tab ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
                            `}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tab-background"
                                    className={`absolute inset-0 ${index === 0 ? 'rounded-l-full' : ''} ${index === tabs.length - 1 ? 'rounded-r-full' : ''}`}
                                    style={{
                                        zIndex: -1,
                                        backgroundColor: 'var(--accent-border)',
                                        boxShadow: '0 0 20px var(--accent-shadow)'
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </motion.button>
                        {index < tabs.length - 1 && (
                            <div
                                className="w-px self-stretch my-2"
                                style={{ backgroundColor: 'var(--default-border)' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    );
} 