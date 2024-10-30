import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a href="#" className="text-zinc-400 hover:text-white transition-colors">
        <Youtube className="w-6 h-6" />
        <span className="sr-only">YouTube</span>
      </a>
      <a href="#" className="text-zinc-400 hover:text-white transition-colors">
        <Twitter className="w-6 h-6" />
        <span className="sr-only">Twitter</span>
      </a>
      <a href="#" className="text-zinc-400 hover:text-white transition-colors">
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="#" className="text-zinc-400 hover:text-white transition-colors">
        <Github className="w-6 h-6" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  )
}
