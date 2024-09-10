import Image from 'next/image';
import { projects } from '../../data/projectContent';
import ProjectContent from '../../components/ProjectContent';
import ProjectLinks from '../../components/ProjectLinks';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
        return <div className="text-center py-16">Project not found</div>;
    }

    return (
        <section id='projects' className='flex flex-col items-center justify-start min-h-screen pt-16 px-4 sm:px-6 md:px-8'>
            <div className="w-full max-w-4xl mx-auto py-8">
                <header>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-500 mb-4">{project.date}</p>
                </header>
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <p className="text-base sm:text-lg md:text-xl mb-6">{project.description}</p>
                <ProjectContent content={project.blogPost} />
                <ProjectLinks links={project.links} />
            </div>
        </section>
    );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-6 bg-white rounded-lg overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
            />
        </div>
    );
}