import { Github } from 'lucide-react'

export function GitHubButton() {
  return (
    <a
      href="https://github.com/Dev22Patel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-md transition-colors w-40"
    >
      <Github className="w-5 h-5" />
      <span>View GitHub</span>
    </a>
  )
}
