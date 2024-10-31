import { ExternalLink, Github } from 'lucide-react';

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
  <div className="bg-zinc-900 rounded-xl p-6 flex flex-col space-y-4 w-full max-w-md mx-auto sm:max-w-xl md:max-w-full">
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-800">
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
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project...",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1",
      image: "/api/placeholder/400/320",
    },
    {
      title: "Project Two",
      description: "Description of your second project...",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2",
      image: "/api/placeholder/400/320",
    },
    {
      title: "Project Three",
      description: "Overview of your third project...",
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/username/project3",
      image: "/api/placeholder/400/320",
    },
    {
      title: "Project Four",
      description: "Overview of your fourth project...",
      tags: ["Vue", "Django", "GraphQL"],
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/username/project4",
      image: "/api/placeholder/400/320",
    }
  ];

  return (
    <section className="min-h-screen w-full bg-black py-24 flex items-center justify-center" id="projects">
      <div className="max-w-3xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">Projects</h2>
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
