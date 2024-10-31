'use client'

import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface LinkItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

interface HackathonCardProps {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly LinkItem[];
}

export const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  description,
  dates,
  location,
  image,
  links,
}) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-grow-line');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <li className="relative py-4 pl-4 md:pl-16">
      <div className="absolute left-0 md:left-0 top-2 flex items-center justify-center">
        <Avatar className="border size-10 md:size-12">
          <AvatarImage src={image} alt={title} className="object-cover" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
        <div className="absolute md:block top-10 h-56 lg:h-40 w-[1px] bg-zinc-600 origin-top" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 ml-8 md:ml-12">
        <div className="flex-1 space-y-2">
          {dates && (
            <time className="text-xs text-muted-foreground">{dates}</time>
          )}
          <h2 className="font-semibold leading-tight text-base md:text-lg">{title}</h2>
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
          {description && (
            <div className="prose dark:prose-invert text-sm text-muted-foreground max-w-none">
              {description}
            </div>
          )}
        </div>

        {links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="inline-flex"
              >
                <Badge variant="secondary" className="flex items-center gap-1.5 text-xs md:text-sm">
                  {link.icon}
                  {link.title}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>

  );
};

export default HackathonCard;
