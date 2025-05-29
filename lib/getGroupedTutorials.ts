import fg from 'fast-glob';
import { readFile } from 'fs/promises';
import { evaluate } from 'next-mdx-remote-client/rsc';

type TutorialMeta = {
  title: string;
};

export async function getGroupedTutorials() {
  const entries = await fg(['tutorials/**/*.mdx']);

  const tutorials = await Promise.all(entries.map(async (entry) => {
    const content = await readFile(entry, 'utf8');

    const { frontmatter } = await evaluate<TutorialMeta>({
      source: content,
      options: { parseFrontmatter: true },
    });

    const slug = entry
      .replace(/^tutorials\//, '')
      .replace(/\.mdx$/, '')
      .replace(/\\/g, '/');

    const [category, maybeSubcategory, ...rest] = slug.split('/');
    const subcategory = rest.length > 0 ? maybeSubcategory : '__root';

    return {
      slug,
      category,
      subcategory,
      title: frontmatter.title,
    };
  }));

	const grouped: Record<
	string,
	Record<string, { slug: string; title: string }[]>
	> = {};

  for (const tutorial of tutorials) {
    const { category, subcategory, title, slug } = tutorial;

    if (!grouped[category]) {
      grouped[category] = {};
    }

    if (!grouped[category][subcategory]) {
      grouped[category][subcategory] = [];
    }

    grouped[category][subcategory].push({ title, slug });
  }

  return grouped;
}





// import fg from 'fast-glob';
// import { readFile } from 'fs/promises';
// import { evaluate } from 'next-mdx-remote-client/rsc';

// type TutorialMeta = {
//   	title: string;
// };

// export async function getGroupedTutorials() {
// 	const entries = await fg(['tutorials/**/*.mdx']);

// 	const tutorials = await Promise.all(entries.map(async (entry) => {
// 		const content = await readFile(entry, 'utf8');

// 		const { frontmatter } = await evaluate<TutorialMeta>({
// 		source: content,
// 		options: {
// 			parseFrontmatter: true,
// 		},
// 		});

// 		const slug = entry
// 		.replace(/^tutorials\//, '')
// 		.replace(/\.mdx$/, '')
// 		.replace(/\\/g, '/');

// 		const category = slug.split('/')[0];

// 		return {
// 		slug,
// 		category,
// 		title: frontmatter.title,
// 		};
// 	}));

// 	const grouped: Record<string, { slug: string; title: string }[]> = {};

// 	for (const tutorial of tutorials) {
// 		if (!grouped[tutorial.category]) {
// 		grouped[tutorial.category] = [];
// 		}
// 		grouped[tutorial.category].push({
// 		slug: tutorial.slug,
// 		title: tutorial.title,
// 		});
// 	}

// 	return grouped;
// }





