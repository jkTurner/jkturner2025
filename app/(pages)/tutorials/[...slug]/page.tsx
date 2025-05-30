import { promises as fs } from 'fs';
import path from 'path';
import { Suspense } from 'react';
import { evaluate, MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import {  getMDXComponents } from '@/mdx-components';
import MainTag from '@/app/components/ui/buttons/MainTag';

type Frontmatter = {
    title: string;
    techUsed?: string[];
}

const components = getMDXComponents({});

export default async function TutorialPostPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
        const { slug } = await props.params;
        const slugPath = slug.join('/');
        const source = await fs.readFile(
        path.join(process.cwd(), 'tutorials', `${slugPath}.mdx`),
        'utf8'
    );

    const options: MDXRemoteOptions = {
        mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: 'catppuccin-frappe' }]],
        },
        parseFrontmatter: true,
    };

    const { frontmatter } = await evaluate<Frontmatter>({
        source,
        options,
    })

    return (
        <div className="flex flex-col w-full mb-xl">
            <h1 className="text-lg text-[var(--foreground)]">{frontmatter.title}</h1>
            <div className="border-b-1 border-[var(--mute)] w-full my-sm" />
            {frontmatter.techUsed && (
                <span className="text-xs text-[var(--foreground)]">Used in this guide:</span>
            )}
            <div className="flex flex-wrap gap-xs my-sm">
                {frontmatter.techUsed?.map((tech) => (
                    <MainTag key={tech} name={tech} />
                ))}
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <MDXRemote
                    source={source}
                    options={options}
                    components={components}
                />
            </Suspense>
        </div>
    );
}




// import { promises as fs } from 'fs';
// import path from 'path';
// import { compileMDX } from 'next-mdx-remote/rsc';
// import Testing from '@/app/components/mdx/Testing';
// import MainTag from '@/app/components/ui/buttons/MainTag';
// import ErrorBlock from '@/app/components/mdx/ErrorBlock';
// import ListBlock from '@/app/components/mdx/ListBlock';
// import CodeBlock from '@/app/components/mdx/CodeBlock';
// import ReasonBlock from '@/app/components/mdx/ReasonBlock';


// export default async function TutorialPostPage(props: {
//     params: Promise<{ slug: string[] }>;
// }) {

//     const { slug } = await props.params;
//     const slugPath = slug.join('/');
//     const tutorial = await fs.readFile(
//         path.join(process.cwd(), 'tutorials', `${slugPath}.mdx`), 
//         'utf8'
//     );

//     const data = await compileMDX<{ title: string, techUsed?: string[] }>({
//         source: tutorial,
//         options: {
//             parseFrontmatter: true
//         },
//         components: {
//             Testing,
//             ErrorBlock,
//             ListBlock,
//             CodeBlock,
//             ReasonBlock,
//         }
//     })

//     console.log("data: ", data)

//     return (
//         <div className="flex flex-col w-full gap-sm">
//             {/* Title */}
//             <h1 className="text-lg">{data.frontmatter.title}</h1>
//             <div className="border-b-1 border-[var(--mute)] w-full" />
//             {data.frontmatter.techUsed && (
//                 <span>Used in this guide:</span>
//             )}
//             <div className="flex gap-xs">
//                 {data.frontmatter.techUsed?.map((tech) => (
//                     <MainTag key={tech} name={tech} />
//                 ))}
//             </div>

//             {/* Test Component */}

//             {/* Content */}
//             <div className="w-full text-[var(--textLight)] text-xs">
//                 {data.content}
//             </div>
//         </div>
//     )
// }
