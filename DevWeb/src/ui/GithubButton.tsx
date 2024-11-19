    import ShimmerButton from '../components/ui/shimmer-button'
    import { Github } from 'lucide-react'

    export function GitHubButton() {
    return (
        <a
        href="https://github.com/Dev22Patel"
        target="_blank"
        rel="noopener noreferrer"
        >
            <ShimmerButton className='shadow-2xl'>
            <Github className="w-5 h-5 text-white" />
            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white  dark:from-white dark:to-slate-900/10 lg:text-lg ml-2'>View GitHub</span>
            </ShimmerButton>

        </a>
    )
    }
