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

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    const groupedItems = groupItemsByCompany(items);

    return (
        <div className="flex flex-col w-full relative">
            {groupedItems.map((group, index) => (
                <TimelineGroup
                    key={index}
                    group={group}
                    index={index}
                    isLast={index === groupedItems.length - 1}
                />
            ))}
        </div>
    );
};
