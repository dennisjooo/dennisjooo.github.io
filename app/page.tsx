'use client';

import Hero from '@/components/hero';
import About from '@/components/about';
import { BackToTop } from '@/components/shared';
import { projects } from '@/data/blogs';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

const WorkExperience = dynamic(() => import('@/components/work-experience'));
const FeaturedProjects = dynamic(() => import('@/components/featured-projects'));
const Skills = dynamic(() => import('@/components/skills'));
const Contacts = dynamic(() => import('@/components/contacts'));

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Visual effect for the Hero as it gets covered
        gsap.to(heroRef.current, {
            scale: 0.95,
            opacity: 0.8,
            filter: "blur(5px)",
            ease: "none",
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 100%", // When top of content hits bottom of viewport
                end: "top 0%",    // When top of content hits top of viewport
                scrub: true,
            }
        });
    });

    return (
        <>
            {/* 
              Sticky Hero Section 
              z-0 ensures it stays behind the content
            */}
            <div 
                ref={heroRef} 
                className="sticky top-0 h-screen w-full z-0"
            >
                <Hero />
            </div>

            {/* 
              Main Content Stack 
              z-10 ensures it slides OVER the hero
              bg-white/black ensures it covers the hero (no transparency)
            */}
            <div 
                ref={contentRef} 
                className="relative z-10 bg-white dark:bg-black shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
                <About />
                <WorkExperience />
                <FeaturedProjects projects={projects} />
                <Skills />
                <Contacts />
            </div>

            <BackToTop />
        </>
    );
}
