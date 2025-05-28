'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  groupedTutorials: Record<string, { slug: string; title: string }[]>;
};


const TutorialMenu = ({ groupedTutorials }: Props ) => {

    const sortedCategories = Object.keys(groupedTutorials).sort();
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-full max-w-[260px]">
            {sortedCategories.map((category) => (
                <div key={category} className="mb-6">
                <h4 className="font-bold uppercase text-sm mb-2">
                    {category.replace(/-/g, ' ')}
                </h4>
                <ul className="space-y-1 text-sm">
                    {groupedTutorials[category].map((tutorial) => (
                    <li
                        key={tutorial.slug}
                        className={`text-xs hover:text-[var(--foreground)] ${
                            pathname === `/tutorials/${tutorial.slug}`
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--textLight)]'
                        }`}
                        >
                        <Link href={`/tutorials/${tutorial.slug}`}>
                        {tutorial.title}
                        </Link>
                    </li>
                    ))}
                </ul>
                <hr className="mt-4 border-neutral-700" />
                </div>
            ))}
        </div>
    )
}

export default TutorialMenu;