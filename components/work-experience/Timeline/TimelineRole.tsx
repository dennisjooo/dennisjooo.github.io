"use client";

import React from 'react';
import { TimelineItemData } from '@/data/workContent';

interface TimelineRoleProps {
    role: TimelineItemData;
}

export const TimelineRole: React.FC<TimelineRoleProps> = ({ role }) => {
    return (
        <div className="relative pl-4 md:pl-0 border-l border-foreground/10 md:border-none">
            {/* Role Header */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h4 className="text-xl md:text-2xl font-sans font-bold leading-tight text-gradient-primary">
                    {role.title}
                </h4>
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-muted-foreground/80">
                    {role.date}
                </span>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3">
                {role.responsibilities.slice(0, 4).map((resp, idx) => (
                    <li key={idx} className="flex items-start text-base md:text-lg font-light text-muted-foreground/80 leading-relaxed">
                        <span className="mr-3 mt-[0.6em] w-1 h-1 rounded-full bg-foreground/20 shrink-0" />
                        <span>{resp}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
