import { GitHubButton } from '../ui/GithubButton'

export function Hero() {
  return (
    <div className="space-y-8 ml-16">
    <div className='grid-flow-row'>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Trust me , I&apos;m a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mt-2 pb-3">
          web-developer.
        </span>
      </h1>
        <div className='text-zinc-400'>(maybe)
        </div>

    </div>

      <p className="text-lg text-zinc-400 max-w-2xl">
        Meet Dev Patel, a passionate web developer and Computer Engineering student at DDIT.
        As a 5th-semester student and a member of the web development team at the Google Developer
        Student Club (GDSC), Dev is dedicated to building creative solutions and enhancing web experiences.
      </p>

      <p className="text-zinc-500 italic">~ ChatGPT</p>

      <div className="space-y-4">
        <p className="text-lg">
          Checkout My Work with{" "}
          <span className="font-semibold"></span> ✨
        </p>

        <GitHubButton />
      </div>
    </div>
  )
}
