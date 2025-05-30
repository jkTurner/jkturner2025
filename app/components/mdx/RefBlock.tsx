import Link from "next/link";

interface RefBlockProps {
    header?: string;
    refItems: string[];
}

const RefBlock = ({ header = "References:", refItems }: RefBlockProps) => {
    return (
        <div>
            <h3 className="text-[var(--foreground)] font-medium mb-sm">{header}</h3>
            {refItems.map((item, index) => (
                <Link key={index} href={item} target="blank">
                    <li>{item}</li>
                </Link>
            ))}
        </div>
    )
}

export default RefBlock;