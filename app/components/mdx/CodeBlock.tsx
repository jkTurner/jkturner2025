import { ReactNode } from 'react';
// import CopyButton from './CopyButton';

interface CodeBlockProps {
  header?: string;
  title?: string;
  children: ReactNode;
}

const CodeBlock = ({ header, title, children }: CodeBlockProps) => {
  return (
	<div className="flex flex-col">
		{header && (
			<h4 
				className="text-[var(--foreground)] mb-xs"
				itemScope
				itemType="https://schema.org/Code"
				itemProp="description"
				>{header}
			</h4>
		)}
		<figure 
			className="rounded-md border border-zinc-700 overflow-hidden mb-md"
			itemScope
        	itemType="https://schema.org/Code"
		>
			{title && (
			<figcaption
				className="not-prose tracking-widest bg-zinc-800 text-white px-4 py-2 text-micro border-b border-zinc-700"
				itemProp="name"
			>
				{title}
			</figcaption>
			)}

			<div className="relative" itemProp="text">
				{children}
				{/* <CopyButton /> */}
			</div>

		</figure>
	</div>
	);
};

export default CodeBlock;