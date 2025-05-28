import { getGroupedTutorials } from "@/lib/getGroupedTutorials";
import TutorialMenu from "@/app/components/tutorials/TutorialMenu";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Tutorials | JKTurner",
    description: "Coming soon",
}

interface TutorialsLayoutProps {
    children: ReactNode;
}

const TutorialsLayout: React.FC<TutorialsLayoutProps> = async ({ children }) => {

    const groupedTutorials = await getGroupedTutorials();

    return (
        <div className="flex w-full max-w-[var(--desktop)] px-md gap-2xl mt-lg">
            <TutorialMenu groupedTutorials={groupedTutorials} />
            {children}
        </div>
    )
}

export default TutorialsLayout;