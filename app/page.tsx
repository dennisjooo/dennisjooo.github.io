import Skills from './components/Skills';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Contacts from './components/Contacts';
import BackToTop from './components/BackToTop';
import FeaturedProjects from './components/FeaturedProjects';
import { projects } from '../data/projects';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <WorkExperience />
            <FeaturedProjects projects={projects} />
            <Skills />
            <Contacts />
            <BackToTop />
        </main>
    );
}
