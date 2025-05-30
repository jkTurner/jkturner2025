import Link from "next/link";

interface RefBlockProps {
  header?: string;
  refItems: string[];
}

const RefBlock = ({ header = "References:", refItems }: RefBlockProps) => {
  return (
    <section
        className="py-xl border-t border-t-[var(--mute)]"
        itemScope
        itemType="https://schema.org/WebPageElement"
    >
        <h3 className="text-[var(--foreground)] font-medium mb-sm" itemProp="name">
            {header}
        </h3>

        <ul className="list-disc pl-md flex flex-col gap-[4px]" itemProp="about">
            {refItems.map((item, index) => (
            <li key={index}>
                <Link
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] break-all"
                    itemProp="url"
                >
                {item}
                </Link>
            </li>
            ))}
        </ul>
    </section>
  );
};

export default RefBlock;
