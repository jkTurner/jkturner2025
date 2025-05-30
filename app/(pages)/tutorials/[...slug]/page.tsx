import { promises as fs } from 'fs';
import path from 'path';
import { Suspense } from 'react';
import { evaluate, MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import {  getMDXComponents } from '@/mdx-components';
import SeoData from '@/app/components/tutorials/SeoData';
import ArticleHeader from '@/app/components/tutorials/ArticleHeader';

type Frontmatter = {
    title: string;
    metaTitle: string;
    description?: string;
    techUsed?: string[];
    date: string;
}

const components = getMDXComponents({});

const mdxOptions: MDXRemoteOptions = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: 'catppuccin-frappe'}]],
    },
    parseFrontmatter: true,
};

// dynamic metadata based on frontmatter of each mdx file
export async function generateMetadata(props: {
    params: Promise<{ slug: string[] }>;
    }) {

    const { slug } = await props.params;
    const slugPath = slug.join('/');

    const source = await fs.readFile(
        path.join(process.cwd(), 'tutorials', `${slugPath}.mdx`),
        'utf8'
    );

    const { frontmatter } = await evaluate<Frontmatter>({
        source,
        options: mdxOptions,
    });

    return {
        title: frontmatter.metaTitle,
        description: frontmatter.description || 'A guide by Jakkrit Turner.',
    };
}

export default async function TutorialPostPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
        const { slug } = await props.params;
        const slugPath = slug.join('/');
        const source = await fs.readFile(
            path.join(process.cwd(), 'tutorials', `${slugPath}.mdx`), 'utf8'
        );


        const { frontmatter } = await evaluate<Frontmatter>({
            source,
            options: mdxOptions,
        });

    return (
        <article itemScope itemType="https://schema.org/Article" className="flex flex-col w-full mb-xl">
            
            <SeoData title={frontmatter.title} description={frontmatter.description} date={frontmatter.date} slugPath={slugPath} />
            <ArticleHeader 
                title={frontmatter.title} 
                description={frontmatter.description}
                date={frontmatter.date} 
                techUsed={frontmatter.techUsed} 
                slugPath={slugPath}
            />

            <Suspense fallback={<div>Loading...</div>}>
                <MDXRemote
                    source={source}
                    options={mdxOptions}
                    components={components}
                />
            </Suspense>
        </article>
    );
}

