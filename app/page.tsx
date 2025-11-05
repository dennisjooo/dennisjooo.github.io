import Skills from '@/app/components/Skills';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import WorkExperience from '@/app/components/WorkExperience';
import Contacts from '@/app/components/Contacts';
import BackToTop from '@/app/components/BackToTop';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import { projects } from '@/data/projects';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <WorkExperience />
            <FeaturedProjects projects={projects} />
            <Skills />
            <Contacts />
            <BackToTop />
        </>
    );
}
