"use client";

import React from 'react';
import { TimelineItemData } from '@/data/workContent';
import { TimelineGroup, CompanyGroup } from './TimelineGroup';

interface TimelineProps {
    items: TimelineItemData[];
    shouldReduceMotion: boolean;
}

/**
 * Groups consecutive timeline items by company name.
 * Items from the same company appearing consecutively are grouped together.
 */
const groupItemsByCompany = (items: TimelineItemData[]): CompanyGroup[] => {
    const groups: CompanyGroup[] = [];

    items.forEach(item => {
        const lastGroup = groups[groups.length - 1];
        if (lastGroup && lastGroup.companyName === item.company) {
            lastGroup.roles.push(item);
        } else {
            groups.push({
                companyName: item.company,
                logo: item.imageSrc,
                roles: [item]
            });
        }
    });

    return groups;
};

export const Timeline: React.FC<TimelineProps> = ({ items, shouldReduceMotion }) => {
    const groupedItems = groupItemsByCompany(items);

    return (
        <div className="flex flex-col w-full relative">
            {/* Minimal vertical guide line (Desktop) */}
            <div className="hidden md:block absolute left-[30%] top-0 bottom-0 w-px bg-foreground/10" />

            {groupedItems.map((group, index) => (
                <TimelineGroup
                    key={index}
                    group={group}
                    index={index}
                    shouldReduceMotion={shouldReduceMotion}
                />
            ))}
        </div>
    );
};
