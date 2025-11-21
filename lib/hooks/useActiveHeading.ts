import { useState, useRef, useCallback, useEffect } from 'react';
import { Heading } from '@/lib/utils/markdownHelpers';
import { SCROLL_ANIMATION_DURATION } from '@/lib/constants/scrolling';

export function useActiveHeading(headings: Heading[]) {
    const [activeId, setActiveId] = useState<string>('');
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const manualScrollLockRef = useRef<NodeJS.Timeout | null>(null);
    const isManualScrollLocked = useRef<boolean>(false);

    // Function to determine which heading is currently active
    const updateActiveHeading = useCallback(() => {
        // Don't update if we're in a manual scroll lock period
        if (isManualScrollLocked.current) return;

        if (headings.length === 0) return;

        // Get current scroll position
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if we're near the bottom of the page (within 100px)
        const isNearBottom = scrollY + viewportHeight >= documentHeight - 100;

        // Find all headings and their positions
        const headingPositions = headings.map((heading) => {
            const element = document.getElementById(heading.id);
            if (!element) return null;

            const rect = element.getBoundingClientRect();
            const absoluteTop = rect.top + scrollY;

            return {
                id: heading.id,
                top: absoluteTop,
                distanceFromTop: rect.top // Distance from viewport top
            };
        }).filter((h): h is NonNullable<typeof h> => h !== null);

        if (headingPositions.length === 0) return;

        // If we're at the bottom of the page, activate the last heading
        if (isNearBottom) {
            const lastHeading = headingPositions[headingPositions.length - 1];
            if (lastHeading.id !== activeId) {
                setActiveId(lastHeading.id);
            }
            return;
        }

        // Strategy: Find the best heading for centered scroll behavior
        // Prefer headings that are at or slightly above the center of viewport
        const centerOfViewport = viewportHeight / 2;
        const threshold = 100; // pixels of tolerance

        let bestHeading = headingPositions[0];
        let bestScore = Infinity;

        for (const heading of headingPositions) {
            const distanceFromCenter = heading.distanceFromTop - centerOfViewport;

            // Prioritize headings at or above center (distanceFromCenter <= 0)
            // But also consider headings slightly below center if they're close
            let score;
            if (distanceFromCenter <= threshold) {
                // For headings at or near center, prefer ones closer to center
                score = Math.abs(distanceFromCenter);
            } else {
                // Headings far below center get penalized heavily
                score = distanceFromCenter * 10;
            }

            if (score < bestScore) {
                bestScore = score;
                bestHeading = heading;
            }
        }

        if (bestHeading.id !== activeId) {
            setActiveId(bestHeading.id);
        }
    }, [headings, activeId]);

    useEffect(() => {
        // Initial update
        updateActiveHeading();

        // Update on scroll with throttling
        const handleScroll = () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Use requestAnimationFrame for smooth updates
            requestAnimationFrame(() => {
                updateActiveHeading();
            });

            // Also do a final check after scrolling stops
            scrollTimeoutRef.current = setTimeout(() => {
                updateActiveHeading();
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [updateActiveHeading]);

    return {
        activeId,
        setActiveId: (id: string) => {
            // When manually setting (e.g., from TOC click), lock automatic updates
            setActiveId(id);
            isManualScrollLocked.current = true;

            // Clear any existing timeout
            if (manualScrollLockRef.current) {
                clearTimeout(manualScrollLockRef.current);
            }

            // Unlock after scroll animation completes
            manualScrollLockRef.current = setTimeout(() => {
                isManualScrollLocked.current = false;
            }, SCROLL_ANIMATION_DURATION);
        }
    };
}
