"use client";

import React, { useState } from 'react';
import { TimelineItemData } from '@/data/workContent';
import { groupItemsByCompany } from '@/lib/utils/workExperience';
import { MobileWorkCard } from './MobileWorkCard';

interface MobileTimelineProps {
    items: TimelineItemData[];
}

export const MobileTimeline: React.FC<MobileTimelineProps> = ({ items }) => {
    const groupedItems = groupItemsByCompany(items);
    
    // Track which company card is expanded (default: first one)
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="md:hidden w-full px-5 py-12">
            {/* Stacked Accordion Cards */}
            <div className="relative space-y-6">
                {groupedItems.map((group, index) => (
                    <MobileWorkCard
                        key={`${group.companyName}-${index}`}
                        group={group}
                        index={index}
                        isExpanded={expandedIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};
