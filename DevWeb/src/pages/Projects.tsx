import { ExternalLink, Github } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';
import cookbook from '../assets/photos/cook-book.png';
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  image,
}) => (
  <div className="relative bg-zinc-900 rounded-xl p-6 flex flex-col space-y-4 w-full max-w-md mx-auto sm:max-w-xl md:max-w-full">
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-800 ">
      <img
        src={image || "/api/placeholder/400/320"}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-zinc-800 text-gray-300 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4 pt-2">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Github size={18} />
          <span>Source Code</span>
        </a>
      )}
        <BorderBeam size={250} duration={14} delay={8} className='rounded-xl' />
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "EventHive",
      description: "Connecting event hosts and sponsors through dynamic auctions.",
      tags: ["React", "Node.js","Express", "MongoDB"],
      liveUrl: "https://event-hub-topaz-seven.vercel.app",
      githubUrl: "https://github.com/Dev22Patel/AT-Project",
      image: "https://plus.unsplash.com/premium_photo-1668051040456-24c63abd95b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnQlMjBsb2dvfGVufDB8fDB8fHww",
    },
    {
      title: "AgroAdvice",
      description: "AgroAdvice recommends optimal pesticides for crop diseases, aiding farmers.",
      tags: ["Java", "Reactjs", "Tailwind"],
      githubUrl: "https://github.com/Dev22Patel/AgroAdvice",
      image: "https://media.istockphoto.com/id/511098265/photo/green-cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=u0ZP1YjC6gF48e-blgRHbMrD-BFba-QtEi2h2MOXHlM=",
    },
    {
      title: "Eduhub",
      description: "EduHub offers access to a variety of educational courses.",
      tags: ["Python", "Django", "DBSqlite"],
      githubUrl: "hhttps://github.com/Dev22Patel/Eduwave",
      image: "https://media.istockphoto.com/id/1402623775/photo/light-bulb-filled-with-geometric-shapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=aD-aapI-uahgq_ZTCh3B7WEFVRnQZpq-YpUqUh5Kgss=",
    },
    {
      title: "Recipe-Haven",
      description: "Recipe Haven is a web platform for managing and exploring diverse recipes.",
      tags: [".net", "EF Core", "MVC Pattern"],
      githubUrl: "https://github.com/Dev22Patel/Recipe-Haven",
      image: cookbook,
    },

  ];

  return (
    <section className="min-h-screen w-full py-24 flex items-center justify-center" id="projects">
      <div className="max-w-3xl mx-auto px-4 w-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="font-bold text-4xl bg-gray-800 rounded-lg bg-foreground text-background inline-block px-3 py-2 text-white">
                  My Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-4">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
