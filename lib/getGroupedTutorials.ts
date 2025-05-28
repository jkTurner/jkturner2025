import fg from 'fast-glob'
// import path from 'path'
import { readFile } from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'

type TutorialMeta = {
    title: string;
};

export async function getGroupedTutorials() {
    const entries = await fg(['tutorials/**/*.mdx']);

    const tutorials = await Promise.all(entries.map(async (entry) => {
        const content = await readFile(entry, 'utf8');

        const { frontmatter } = await compileMDX<TutorialMeta>({
            source: content,
            options: { parseFrontmatter: true },
        });

        const slug = entry
            .replace(/^tutorials\//, '')
            .replace(/\.mdx$/, '')
            .replace(/\\/g, '/');

        const category = slug.split('/')[0];

        return {
            slug,
            category,
            title: frontmatter.title,
        };
    }));

    const grouped: Record<string, {slug: string; title: string }[]> = {};

    for (const tutorial of tutorials) {
        if (!grouped[tutorial.category]) {
            grouped[tutorial.category] = [];
        }
        grouped[tutorial.category].push({
            slug: tutorial.slug,
            title: tutorial.title,
        });
    }

    return grouped;
}