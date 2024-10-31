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
    <div className="w-full mt-24">
      <section className="py-8 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="font-bold text-3xl md:text-4xl bg-gray-800 rounded-lg bg-foreground text-background inline-block px-3 py-2">
                Hackathons
              </div>
              <h2 className="text-xl md:text-2xl lg:text-5xl font-bold tracking-tighter mt-4">
                I like building things
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-xl max-w-2xl mx-auto">
                I have attended 2 hackathons uptill now. It was eye-opening to see the endless possibilities
                brought to life by a group of motivated and passionate individuals.
              </p>
            </div>
          </div>

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
        </div>
      </section>
    </div>
  );
};
