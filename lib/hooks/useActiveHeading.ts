import { useState, useRef, useCallback, useEffect } from 'react';
import { Heading } from '@/lib/utils/markdownHelpers';

export function useActiveHeading(headings: Heading[]) {
    const [activeId, setActiveId] = useState<string>('');
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Function to determine which heading is currently active
    const updateActiveHeading = useCallback(() => {
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

        // Strategy: Find the heading closest to the middle of the viewport
        // that is currently visible (above the middle)
        const middleOfViewport = viewportHeight / 2;

        let bestHeading = headingPositions[0];
        let bestScore = Infinity;

        for (const heading of headingPositions) {
            // Skip headings that are below the middle of viewport
            if (heading.distanceFromTop > middleOfViewport) {
                continue;
            }

            // Calculate score: how close is this heading to the top of viewport
            // Lower score = closer to top = more likely to be the active section
            const score = Math.abs(heading.distanceFromTop - 150); // 150px sweet spot

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

    return { activeId, setActiveId };
}
