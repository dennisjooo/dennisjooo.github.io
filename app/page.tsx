import Skills from './components/Skills';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Contacts from './components/Contacts';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Contacts />
    </main>
  );
}
