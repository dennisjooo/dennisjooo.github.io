"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CompanyGroup } from '@/lib/utils/workExperience';

interface MobileWorkCardProps {
    group: CompanyGroup;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

export const MobileWorkCard: React.FC<MobileWorkCardProps> = ({
    group,
    index,
    isExpanded,
    onToggle,
}) => {
    // Get the date range for the company (first role start to last role end)
    const dateRange = group.roles.length > 1
        ? `${group.roles[group.roles.length - 1].date.split(' - ')[0]} - ${group.roles[0].date.split(' - ')[1] || 'Now'}`
        : group.roles[0].date;

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ zIndex: isExpanded ? 10 : 1 }}
        >
            {/* Gradient Glow - Only visible when expanded */}
            <div
                className={`absolute -inset-1 bg-gradient-accent rounded-2xl blur-lg transition-opacity duration-300 ${isExpanded ? 'opacity-50' : 'opacity-0'
                    }`}
            />

            {/* Gradient Border - Only visible when expanded */}
            <div
                className={`absolute -inset-px bg-gradient-accent rounded-2xl transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Card Container - Using CSS transitions instead of Framer Motion for performance */}
            <div
                className={`relative bg-background rounded-2xl overflow-hidden transition-shadow duration-300 ${isExpanded
                        ? 'shadow-xl'
                        : 'border border-foreground/5 shadow-lg'
                    }`}
                style={{
                    margin: isExpanded ? '1px' : '0',
                    willChange: 'auto',
                }}
            >
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Card Header - Clickable */}
                <button
                    onClick={onToggle}
                    className="relative z-10 w-full p-6 flex flex-col gap-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    {/* Top Row: Index Number and Chevron */}
                    <div className="flex items-center justify-between">
                        {/* Index Number - Editorial Style */}
                        <span className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
                            0{index + 1}.
                        </span>

                        {/* Expand Indicator - Using CSS transform instead of Framer Motion */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${isExpanded ? 'bg-foreground/10' : 'bg-foreground/5'
                                }`}
                            style={{
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        >
                            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>

                    {/* Logo - Featured Large */}
                    <div className="relative w-16 h-16 overflow-hidden shrink-0">
                        <Image
                            src={group.logo}
                            alt={group.companyName}
                            fill
                            className={`object-contain object-left transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-70'
                                }`}
                            style={{
                                filter: isExpanded ? 'grayscale(0)' : 'grayscale(1)',
                            }}
                        />
                    </div>

                    {/* Company Info */}
                    <div className="space-y-2">
                        <h3 className="text-3xl font-playfair italic font-bold text-gradient-primary leading-tight pb-1">
                            {group.companyName}
                        </h3>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
                                {dateRange}
                            </span>
                            {!isExpanded && (
                                <>
                                    <span className="text-muted-foreground/30">|</span>
                                    <span className="font-mono text-xs text-muted-foreground/40">
                                        {group.roles.length} {group.roles.length === 1 ? 'role' : 'roles'}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Tap Hint - Only when collapsed */}
                    {!isExpanded && (
                        <div className="flex items-center gap-2 pt-1">
                            <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
                            <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                                Tap to explore
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-l from-foreground/10 to-transparent" />
                        </div>
                    )}
                </button>

                {/* Expandable Content - Using CSS grid for smooth height animation */}
                <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{
                        gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    }}
                >
                    <div className="overflow-hidden">
                        <div
                            className={`relative z-10 px-6 pb-6 space-y-8 transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

                            {/* Roles - No staggered animations for better performance */}
                            {group.roles.map((role, roleIndex) => (
                                <div
                                    key={role.id}
                                    className="space-y-4"
                                >
                                    {/* Role Header */}
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-urbanist font-bold uppercase tracking-tight text-foreground">
                                            {role.title}
                                        </h4>
                                        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60 bg-foreground/5 px-2 py-1 rounded inline-block">
                                            {role.date}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-3">
                                        {role.responsibilities.map((resp, respIndex) => (
                                            <li
                                                key={respIndex}
                                                className="flex items-start text-sm font-light text-muted-foreground leading-relaxed"
                                            >
                                                <span className="mr-3 mt-2 w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Role Divider (not for last role) */}
                                    {roleIndex < group.roles.length - 1 && (
                                        <div className="pt-4">
                                            <div className="w-12 h-px bg-foreground/10" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
