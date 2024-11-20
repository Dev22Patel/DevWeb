import { GitHubButton } from '../ui/GithubButton';

export function Hero() {
  return (
    <div className="space-y-8 mb-14 lg:ml-16 md:ml-8 sm:ml-4">
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Trust me, I'm a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-800  dark:bg-gradient-to-r dark:from-cyan-300 dark:to-purple-400 inline-block">
            web-developer.
          </span>
        </h1>
      </div>
      <div className="space-y-6">
        <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Meet Dev Patel, a passionate web developer and Computer Engineering student at DDIT.
          As a 5th-semester student and a member of the web development team at the{" "}
            Google Developer Student Club (GDSC)
          , Dev is dedicated to building creative solutions and enhancing web experiences.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg font-medium flex items-center gap-2">
          Crafting the web, one line of code at a time
          <span className="inline-block">✨</span>
        </p>
        <div className="pt-2">
          <GitHubButton />
        </div>
      </div>
    </div>
  );
}
