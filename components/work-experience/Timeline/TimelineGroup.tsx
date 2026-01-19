"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItemData } from '@/data/workContent';
import { CompanyHeaderMobile, CompanyHeaderDesktop } from './CompanyHeader';
import { TimelineRole } from './TimelineRole';

export interface CompanyGroup {
    companyName: string;
    logo: string;
    roles: TimelineItemData[];
}

interface TimelineGroupProps {
    group: CompanyGroup;
    index: number;
    shouldReduceMotion: boolean;
}

export const TimelineGroup: React.FC<TimelineGroupProps> = ({ group, index, shouldReduceMotion }) => {
    return (
        <motion.div
            className="group relative border-t border-foreground/10 md:border-t-0 py-12 md:py-16 first:pt-0 last:pb-0 md:grid md:grid-cols-12 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Left Column: Sticky Company Header (Desktop) */}
            <div className="md:col-span-4 lg:col-span-4 relative md:text-right md:pr-12">
                <div className="sticky top-32 flex flex-col md:items-end gap-6 mb-8 md:mb-0">
                    {/* Mobile: Company Header inline */}
                    <CompanyHeaderMobile
                        companyName={group.companyName}
                        logo={group.logo}
                    />

                    {/* Desktop: Sticky Content */}
                    <CompanyHeaderDesktop
                        companyName={group.companyName}
                        logo={group.logo}
                    />
                </div>

                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:block absolute right-[-6.5px] top-[3.5rem] w-3 h-3 rounded-full bg-background border border-foreground/30 group-hover:bg-foreground group-hover:border-foreground transition-colors duration-500 z-10" />
            </div>

            {/* Right Column: Roles & Content */}
            <div className="md:col-span-8 lg:col-span-8 pt-0 md:pt-4">
                <div className="flex flex-col space-y-12 md:space-y-16">
                    {group.roles.map((role) => (
                        <TimelineRole key={role.id} role={role} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
