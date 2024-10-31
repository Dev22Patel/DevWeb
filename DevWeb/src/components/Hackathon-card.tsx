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
    <li className="relative md:ml-10 py-4 ml-6">
      <div className="absolute md:-left-16 -left-10 top-4 flex flex-col items-center">
        {/* Avatar Circle */}
        <div className="z-10 flex items-center justify-center bg-white rounded-full overflow-hidden w-12 h-12">
          <Avatar className="border w-full h-full">
            <AvatarImage src={image} alt={title} className="object-cover" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </div>
        {/* Connecting Line */}
        <div
          ref={lineRef}
          className="absolute md:block hidden top-12 h-36 w-0.5 bg-gray-600 origin-top"
        />
      </div>

      <div className="flex flex-1 flex-col justify-start gap-1 px-2">
        {dates && (
          <time className="text-muted-foreground text-xs">{dates}</time>
        )}
        <h2 className="font-semibold leading-none text-lg">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="flex mt-2 flex-row flex-wrap gap-2 items-start">
          {links?.map((link, idx) => (
            <a href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default HackathonCard;
