import { HackathonCard } from '../components/Hackathon-card'
import { Github, Link as LinkIcon } from 'lucide-react';
import duhacks from '../assets/avatar/duhacks 3.0.png';
import hackout from '../assets/avatar/hack.webp';

// Sample hackathon data
const hackathons = [
  {
    title: "DuHacks 3.0",
    description: "Built a real-time collaboration platform using WebRTC and React, winning first place in the Developer Tools category.",
    dates: "Feb 24-25, 2023",
    location: "DDU, Nadiad",
    image: duhacks,
    links: [
      {
        icon: <Github className="size-4" />,
        title: "Code",
        href: "https://github.com/yourusername/project1"
      },
      {
        icon: <LinkIcon className="size-4" />,
        title: "Demo",
        href: "https://demo.com"
      }
    ]
  },
  {
    title: "Hackout'24",
    description: "Developed an AI-powered accessibility tool that converts speech to sign language in real-time.",
    dates: "July 1-7, 2023",
    location: "DAIICT, Gandhinagar",
    image: hackout,
    links: [
      {
        icon: <Github className="size-4" />,
        title: "Code",
        href: "https://github.com/yourusername/project2"
      }
    ]
  }
];

export const HackathonsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-42 sm:px-6 lg:px-8">
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Hackathon Achievements</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-8 relative">
            {hackathons.map((hackathon, index) => (
              <HackathonCard
                key={index}
                {...hackathon}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
