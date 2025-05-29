import { promises as fs } from 'fs';
import path from 'path';
import { Suspense } from 'react';
import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { useMDXComponents } from '@/mdx-components';

const components = useMDXComponents({});

export default async function TutorialPostPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  const slugPath = slug.join('/');
  const source = await fs.readFile(
    path.join(process.cwd(), 'content', `${slugPath}.mdx`),
    'utf8'
  );

  const options: MDXRemoteOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrettyCode],
    },
    parseFrontmatter: true,
  };

  return (
    <div className="mx-auto py-8 px-[24px]">
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

