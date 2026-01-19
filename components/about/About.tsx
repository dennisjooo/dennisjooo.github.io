'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutContent } from '@/data/aboutContent';
import { ProfileImage } from './ProfileImage';
import { SectionHeader } from '../shared/SectionHeader';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContentRef = useRef<HTMLDivElement>(null);

    const contentSections = [
        { title: "The Logic", body: aboutContent.intro, id: "intro" },
        { title: "The Builder", body: aboutContent.experience, id: "exp" },
        { title: "The Curiosity", body: aboutContent.personal, id: "pers" },
        { title: "The Connection", body: aboutContent.outro, id: "outro" }
    ];

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
                xPercent: -(100 * (totalSections - 1) / totalSections), // Move 4/5ths of the total width
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
            // Setup initial states
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
                    end: "+=3000", // 3000px scroll distance
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            // Loop through sections to create the transitions
            contentSections.forEach((_, i) => {
                if (i === contentSections.length - 1) return; // No exit for last section in this loop style

                const currentTitle = titles[i];
                const nextTitle = titles[i + 1];
                const currentBody = bodies[i];
                const nextBody = bodies[i + 1];

                // Transition Step
                tl.to(currentTitle, { rotationX: 90, opacity: 0, duration: 1, ease: "power2.inOut" }, `step-${i}`)
                  .to(currentBody, { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, `step-${i}`)
                  
                  .to(nextTitle, { rotationX: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, `step-${i}+=0.5`)
                  .to(nextBody, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, `step-${i}+=0.8`);
                
                // Add a small pause/gap between sections
                tl.to({}, { duration: 0.5 }); 
            });
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="about"
            className="min-h-screen relative bg-background text-foreground overflow-hidden"
        >
            <div 
                ref={containerRef}
                className="h-screen w-full flex flex-col md:max-w-7xl mx-auto md:px-6 pt-24 md:pt-32"
            >
                {/* Header */}
                <div className="w-full px-6 md:px-0 mb-8">
                    <SectionHeader 
                        number="02." 
                        title="About Me" 
                    />
                </div>

                <div className="flex-1 w-full relative overflow-hidden flex flex-col md:flex-row">
                    {/* Mobile View (Horizontal Scroll) */}
                    <div className="md:hidden w-full h-full overflow-hidden">
                        <div className="mobile-scroll-container flex w-[500%] h-full">
                            
                            {/* Card 1: Profile */}
                            <div className="w-screen h-full flex flex-col justify-center items-center px-8 relative">
                                <span className="absolute top-32 font-mono text-xs uppercase tracking-widest opacity-50 text-muted-foreground">Swipe to Explore</span>
                                <ProfileImage />
                                <div className="mt-8 text-center space-y-2">
                                    <h3 className="font-playfair italic text-4xl text-foreground">Dennis Jonathan</h3>
                                    <p className="font-mono text-xs uppercase tracking-widest opacity-50 text-muted-foreground">
                                        Developer & Problem Solver
                                    </p>
                                </div>
                            </div>

                            {/* Cards 2-5: Content */}
                            {contentSections.map((section) => (
                                <div key={section.id} className="w-screen h-full flex flex-col justify-center px-8 space-y-6">
                                    <h3 className="text-5xl font-playfair italic font-bold leading-tight text-gradient-primary pb-2">
                                        {section.title}
                                    </h3>
                                    <div className="w-12 h-px bg-current opacity-20 text-foreground" />
                                    <p className="font-light text-muted-foreground leading-relaxed text-lg">
                                        {section.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View (Split: Sticky Image + 3D Scroll) */}
                    <div className="hidden md:flex w-full h-full">
                        
                        {/* Col 1: Sticky Image & Metadata (40%) */}
                        <div className="w-[40%] h-full flex flex-col justify-center items-center p-12 relative z-10">
                            {/* Decorative Line */}
                            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

                            <div className="w-full max-w-md flex flex-col items-center">
                                {/* Removed old header from here */}

                                <ProfileImage />
                                
                                <div className="mt-8 text-center space-y-2">
                                    <h3 className="font-playfair italic text-3xl text-foreground">Dennis Jonathan</h3>
                                    <p className="font-mono text-xs uppercase tracking-widest opacity-50 text-muted-foreground">
                                        Developer & Problem Solver
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Col 2: The 3D Scroll Container (60%) */}
                        <div ref={scrollContentRef} className="w-[60%] h-full flex items-center relative pl-16">
                            {contentSections.map((section) => (
                                <div 
                                    key={section.id}
                                    className="absolute inset-x-16 top-1/2 -translate-y-1/2 flex flex-col justify-center"
                                >
                                    {/* Title Wrapper */}
                                    <div className="about-title will-change-transform backface-hidden origin-center mb-8">
                                        <h2 className="text-7xl xl:text-8xl font-playfair italic font-bold text-gradient-primary leading-tight pb-4">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Body Wrapper */}
                                    <div className="about-body origin-center max-w-xl">
                                        <p className="text-xl xl:text-2xl font-light leading-relaxed text-muted-foreground">
                                            {section.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
