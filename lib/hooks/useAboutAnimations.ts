'use client';

import { RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ContentSection {
    title: string;
    body: string;
    id: string;
}

interface UseAboutAnimationsProps {
    sectionRef: RefObject<HTMLDivElement | null>;
    containerRef: RefObject<HTMLDivElement | null>;
    contentSections: ContentSection[];
}

export const useAboutAnimations = ({
    sectionRef,
    containerRef,
    contentSections
}: UseAboutAnimationsProps) => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current) return;

        const mm = gsap.matchMedia();

        // Mobile Animation (Horizontal Scroll)
        mm.add("(max-width: 767px)", () => {
            const mobileContainer = document.querySelector('.mobile-scroll-container');
            if (!mobileContainer) return;

            const totalSections = 5; // Profile + 4 content sections

            gsap.to(mobileContainer, {
                xPercent: -(100 * (totalSections - 1) / totalSections),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (totalSections - 1),
                    end: "+=2000",
                }
            });
        });

        // Desktop Animation (3D Scroll)
        mm.add("(min-width: 768px)", () => {
            const titles = gsap.utils.toArray<HTMLElement>(".about-title");
            const bodies = gsap.utils.toArray<HTMLElement>(".about-body");

            // Hide all except first
            titles.forEach((title, i) => {
                if (i !== 0) gsap.set(title, { rotationX: -90, opacity: 0, transformOrigin: "50% 50% -50px" });
                else gsap.set(title, { rotationX: 0, opacity: 1, transformOrigin: "50% 50% -50px" });
            });
            bodies.forEach((body, i) => {
                if (i !== 0) gsap.set(body, { opacity: 0, y: 30 });
                else gsap.set(body, { opacity: 1, y: 0 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            // Loop through sections to create the transitions
            contentSections.forEach((_, i) => {
                if (i === contentSections.length - 1) return;

                const currentTitle = titles[i];
                const nextTitle = titles[i + 1];
                const currentBody = bodies[i];
                const nextBody = bodies[i + 1];

                tl.to(currentTitle, { rotationX: 90, opacity: 0, duration: 1, ease: "power2.inOut" }, `step-${i}`)
                    .to(currentBody, { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, `step-${i}`)
                    .to(nextTitle, { rotationX: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, `step-${i}+=0.5`)
                    .to(nextBody, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, `step-${i}+=0.8`);

                tl.to({}, { duration: 0.5 });
            });
        });

    }, { scope: sectionRef });
};
