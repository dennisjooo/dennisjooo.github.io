import { NAVBAR_OFFSET } from '@/lib/constants/scrolling';

/**
 * Calculates the scroll position to center an element in the viewport
 * @param element - The element to center
 * @returns The scroll position to center the element
 */
export function calculateCenteredScrollPosition(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    const absoluteElementTop = rect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (rect.height / 2) + NAVBAR_OFFSET;
    return middle;
}

/**
 * Scrolls to center an element in the viewport
 * @param element - The element to scroll to
 * @param smooth - Whether to use smooth scrolling (default: true)
 */
export function scrollToCentered(element: HTMLElement, smooth: boolean = true): void {
    const scrollPosition = calculateCenteredScrollPosition(element);
    window.scrollTo({
        top: scrollPosition,
        behavior: smooth ? 'smooth' : 'instant'
    });
}

