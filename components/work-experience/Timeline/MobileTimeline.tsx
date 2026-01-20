"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItemData } from '@/data/workContent';
import { groupItemsByCompany } from '@/lib/utils/workExperience';
import { CompanyHeader } from './CompanyHeader';
import { TimelineRole } from './TimelineRole';

interface MobileTimelineProps {
    items: TimelineItemData[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const MobileTimeline: React.FC<MobileTimelineProps> = ({ items }) => {
    const groupedItems = groupItemsByCompany(items);

    return (
        <div className="md:hidden w-full px-5 py-12">
            {/* Vertical Timeline */}
            <motion.div
                className="relative space-y-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Timeline Line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-foreground/10" />

                {groupedItems.map((group, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-12"
                        variants={cardVariants}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-6 w-6 h-6 rounded-full border-2 border-foreground/20 bg-background flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-foreground/40" />
                        </div>

                        {/* Card */}
                        <div className="bg-background/50 border border-foreground/5 rounded-2xl">
                            {/* Header */}
                            <div className="mb-6">
                                <CompanyHeader
                                    companyName={group.companyName}
                                    logo={group.logo}
                                />
                            </div>

                            {/* Roles */}
                            <div className="space-y-8">
                                {group.roles.map((role, roleIndex) => (
                                    <TimelineRole key={role.id} role={role} index={roleIndex} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
