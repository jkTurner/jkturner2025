

const TutorialMenu = () => {
    return (
        <div className="flex flex-col w-full max-w-[280px]">
            <div className="flex flex-col gap-xs border-b-1 border-[var(--mute)] py-sm">
                <h2 className="font-bold">Dev Steps</h2>
                <h3 className="text-xs text-[var(--textLight)]">Overview</h3>
            </div>
            <div className="flex flex-col gap-xs border-b-1 border-[var(--mute)] py-sm">
                <h2 className="font-bold">REACT ESSENTIALS</h2>
                <h3 className="text-xs text-[var(--textLight)]">useState fundamental</h3>
                <h3 className="text-xs text-[var(--textLight)]">useEffect fundamental</h3>
                <h3 className="text-xs text-[var(--textLight)]">React props fundamental</h3>
                <h3 className="text-xs text-[var(--textLight)]">Styling fundamental</h3>
            </div>
            <div className="flex flex-col gap-xs border-b-1 border-[var(--mute)] py-sm">
                <h2 className="font-bold">REACT ECOSYSTEM</h2>
                <h3 className="text-xs text-[var(--textLight)]">Zustand Basics: Global state with minimal boilerplate</h3>
                <h3 className="text-xs text-[var(--textLight)]">Managing async state with React Query</h3>
                <h3 className="text-xs text-[var(--textLight)]">Animate React components with Framer Motion</h3>
            </div>
            <div className="flex flex-col gap-xs border-b-1 border-[var(--mute)] py-sm">
                <h2 className="font-bold">STATE MANAGEMENT</h2>
                <h3 className="text-xs text-[var(--textLight)]">Global State with Zustand</h3>
                <h3 className="text-xs text-[var(--textLight)]">When to use context vs Zustand</h3>
                <h3 className="text-xs text-[var(--textLight)]">Persisting Zustand state with middleware</h3>
            </div>
            <div className="flex flex-col gap-xs border-b-1 border-[var(--mute)] py-sm">
                <h2 className="font-bold">Tips</h2>
                <h3 className="text-xs text-[var(--textLight)]">Building custom 404 pages in Next.js</h3>
            </div>
        </div>
    )
}

export default TutorialMenu;