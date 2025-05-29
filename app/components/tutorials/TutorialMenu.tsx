'use client'
import { MinusIcon, PlusIcon } from '@/asset/Icon';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react';

type TutorialItem = { slug: string; title: string }
type Props = {
  groupedTutorials: Record<string, Record<string, TutorialItem[]>>;
}

const TutorialMenu = ({ groupedTutorials }: Props) => {
  const pathname = usePathname()
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

    const toggleFolder = (key: string) => {
        setOpenFolders((prev) => ({ ...prev, [key]: !prev[key] }));
    }

useEffect(() => {
  const initialOpen: Record<string, boolean> = {};

  Object.entries(groupedTutorials).forEach(([category, subMap]) => {
    console.log(category);
    Object.keys(subMap).forEach((sub) => {
      if (sub !== '__root' && pathname.includes(`/${sub}/`)) {
        initialOpen[sub] = true;
      }
    });
  });

  setOpenFolders(initialOpen);
}, [pathname, groupedTutorials]);    

  const categoryOrder = [
    'dev-steps',
    'react-essentials',
    'react-ecosystem',
    'state-management',
    'tips',
    'errors', // always last
  ]

  const sortedCategories = Object.keys(groupedTutorials).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.toLowerCase())
    const indexB = categoryOrder.indexOf(b.toLowerCase())

    if (indexA === -1 && indexB === -1) return a.localeCompare(b)
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })

return (
  <div className="flex flex-col w-[280px] shrink-0">
    {sortedCategories.map((category) => (
      <div key={category} className="mb-6">
        <h4 className="font-bold uppercase text-sm mb-2">
          {category.replace(/-/g, ' ')}
        </h4>

        <ul className="space-y-1 text-sm">
          {Object.entries(groupedTutorials[category]).map(([sub, tutorials]) => {
            if (sub === '__root') {
              return tutorials.map((tutorial) => (
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
              ))
            }

            // const isOpen = openFolders[sub] || pathname.includes(`/${sub}/`)
            const isOpen = openFolders[sub];
            const isActiveFolder = pathname.includes(`/${sub}/`);

            return (
              <li key={sub}>
                <div className="flex w-full justify-between items-center">
                    <button
                    onClick={() => toggleFolder(sub)}
                    className={`text-xs w-full text-left hover:text-[var(--foreground)] cursor-pointer ${
                    isActiveFolder ? 'text-[var(--accent)]' : 'text-[var(--textLight)]'
                    }`}
                    >
                    {sub.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                    </button>
                    <div onClick={() => toggleFolder(sub)} className="cursor-pointer">
                        {isOpen ? 
                            <div className="flex justify-center items-center w-[12px] h-[12px]">
                            <MinusIcon size={12} />
                            </div> : 
                            <PlusIcon size={12} />
                        } 
                    </div>
                </div>

                {isOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {tutorials.map((tutorial) => (
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
                )}
              </li>
            )
          })}
        </ul>

        <hr className="mt-4 border-neutral-700" />
      </div>
    ))}
  </div>
)

}

export default TutorialMenu





// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// type Props = {
//   groupedTutorials: Record<string, { slug: string; title: string }[]>;
// };


// const TutorialMenu = ({ groupedTutorials }: Props ) => {

//     const categoryOrder = [
//         'dev-steps',
//         'react-essentials',
//         'react-ecosystem',
//         'state-management',
//         'tips',
//         'errors' // always last
//     ];

//     // const sortedCategories = Object.keys(groupedTutorials).sort();

//     const sortedCategories = Object.keys(groupedTutorials).sort((a, b) => {
//     const indexA = categoryOrder.indexOf(a.toLowerCase());
//     const indexB = categoryOrder.indexOf(b.toLowerCase());

//     // Push unknown categories to the end
//     if (indexA === -1 && indexB === -1) return a.localeCompare(b);
//     if (indexA === -1) return 1;
//     if (indexB === -1) return -1;

//     return indexA - indexB;
//     });

//     const pathname = usePathname();

//     return (
//         <div className="flex flex-col w-[280px] shrink-0">
//             {sortedCategories.map((category) => (
//                 <div key={category} className="mb-6">
//                 <h4 className="font-bold uppercase text-sm mb-2">
//                     {category.replace(/-/g, ' ')}
//                 </h4>
//                 <ul className="space-y-1 text-sm">
//                     {groupedTutorials[category].map((tutorial) => (
//                     <li
//                         key={tutorial.slug}
//                         className={`text-xs hover:text-[var(--foreground)] ${
//                             pathname === `/tutorials/${tutorial.slug}`
//                             ? 'text-[var(--accent)]'
//                             : 'text-[var(--textLight)]'
//                         }`}
//                         >
//                         <Link href={`/tutorials/${tutorial.slug}`}>
//                         {tutorial.title}
//                         </Link>
//                     </li>
//                     ))}
//                 </ul>
//                 <hr className="mt-4 border-neutral-700" />
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default TutorialMenu;




