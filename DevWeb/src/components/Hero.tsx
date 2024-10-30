import { GitHubButton } from '../ui/GithubButton';

export function Hero() {
  return (
    <div className="space-y-8 lg:ml-16 md:ml-8 sm:ml-4">
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Trust me, I'm a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 inline-block">
            web-developer.
          </span>
        </h1>
        <div className="text-zinc-400 text-base sm:text-lg font-medium animate-pulse">
          (maybe)
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Meet Dev Patel, a passionate web developer and Computer Engineering student at DDIT.
          As a 5th-semester student and a member of the web development team at the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-green-400 to-yellow-200 font-semibold">
            Google Developer Student Club (GDSC)
          </span>
          , Dev is dedicated to building creative solutions and enhancing web experiences.
        </p>
        <div className="flex items-center space-x-2 text-zinc-500 italic">
          <span>~</span>
            ChatGPT
        </div>
      </div>
      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg font-medium flex items-center gap-2">
          Crafting the web, one line of code at a time
          <span className="animate-bounce inline-block">✨</span>
        </p>
        <div className="pt-2">
          <GitHubButton />
        </div>
      </div>
    </div>
  );
}
