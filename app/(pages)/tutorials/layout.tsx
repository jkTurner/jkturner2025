import { getGroupedTutorials } from "@/lib/getGroupedTutorials";
import TutorialMenu from "@/app/components/tutorials/TutorialMenu";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: {
		template: '%s | Jakkrit Turne',
		default: 'Tutorials',
	},
    description: "Coming soon",
}

interface TutorialsLayoutProps {
    children: ReactNode;
}

const TutorialsLayout: React.FC<TutorialsLayoutProps> = async ({ children }) => {

    const groupedTutorials = await getGroupedTutorials();

    return (
        <div className="flex w-full mx-auto max-w-[var(--desktop)] px-md gap-2xl mt-lg min-h-[80vh]">
            <TutorialMenu groupedTutorials={groupedTutorials} />
            <div className="flex-1 min-w-0 text-xs text-[var(--textLight)]">
                {children}
            </div>
        </div>
    )
}

export default TutorialsLayout;