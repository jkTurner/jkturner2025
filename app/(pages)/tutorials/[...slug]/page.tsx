import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Testing from '@/app/components/mdx/Testing';
import MainTag from '@/app/components/ui/buttons/MainTag';

export default async function TutorialPostPage({ params }: { params: { slug: string[] }}) {

    // const tutorial = await fs.readFile(path.join(process.cwd(), "tutorials", `${params.slug}.mdx`), 'utf8');
    const slugPath = params.slug.join('/');
    const tutorial = await fs.readFile(
        path.join(process.cwd(), 'tutorials', `${slugPath}.mdx`), 
        'utf8'
    );

    const data = await compileMDX<{ title: string, techUsed?: string[] }>({
        source: tutorial,
        options: {
            parseFrontmatter: true
        },
        components: {
            Testing,
        }
    })

    console.log("data: ", data)

    return (
        <div className="flex flex-col w-full gap-sm">
            {/* Title */}
            <h1 className="text-lg">{data.frontmatter.title}</h1>
            <div className="border-b-1 border-[var(--mute)] w-full" />
            {data.frontmatter.techUsed && (
                <span>Used in this guide:</span>
            )}
            <div className="flex gap-xs">
                {data.frontmatter.techUsed?.map((tech) => (
                    <MainTag key={tech} name={tech} />
                ))}
            </div>

            {/* Content */}
            <div className="w-full text-[var(--textLight)] text-xs">
                {data.content}
            </div>
        </div>
    )
}
