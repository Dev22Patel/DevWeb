import { GitHubButton } from '../ui/GithubButton'

export function Hero() {
  return (
    <div className="space-y-8 ml-16">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Trust me, I&apos;m a{" "}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mt-2 pb-3">
          software engineer.
        </div>
      </h1>

      <p className="text-lg text-zinc-400 max-w-2xl">
        Meet Piyush Garg, content creator, educator, and entrepreneur known for his
        expertise in the tech industry. He has successfully launched numerous
        technical courses on various platforms. Founder of Teachyst, white-labeled
        Learning Management System (LMS) to help educators monetize their content globally.
      </p>

      <p className="text-zinc-500 italic">~ ChatGPT</p>

      <div className="space-y-4">
        <p className="text-lg">
          Building{" "}
          <span className="font-semibold">Teachyst</span>{" "}
          next-gen LMS ✨
        </p>

        <GitHubButton />
      </div>
    </div>
  )
}
