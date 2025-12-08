import Skills from '@/components/skills';
import Hero from '@/components/hero';
import About from '@/components/about';
import WorkExperience from '@/components/work-experience';
import Contacts from '@/components/contacts';
import { BackToTop } from '@/components/shared';
import FeaturedProjects from '@/components/featured-projects';
import { projects } from '@/data/blogs';

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
