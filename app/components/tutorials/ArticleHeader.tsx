import { formatDate } from "@/util/formatDate";
import MainTag from "../ui/buttons/MainTag";

interface ArticleHeaderProps {
    title: string;
    description?: string;
    date: string;
    techUsed?: string[];
    slugPath: string;
}

const ArticleHeader = ({ title, description, date, techUsed, slugPath }: ArticleHeaderProps) => {
    return (
        <>
            <h1 
                itemProp="headline"
                className="text-lg text-[var(--foreground)]"
            >
                {title}
            </h1>

            <time 
                itemProp="datePublished"
                dateTime={date}
            >
                {formatDate(date)}
            </time>

            {description && (
                <meta itemProp="description" content={description} />
            )}

            <meta itemProp="author" content="Jakkrit Turner" />
            <meta
                itemProp="mainEntityOfPage"
                content={`https://jkturner.site/tutorials/${slugPath}`}
            />

            <div className="border-b-1 border-[var(--mute)] w-full my-sm" />
            {techUsed && (
                <span className="text-xs text-[var(--foreground)]">Used in this guide:</span>
            )}
            <div className="flex flex-wrap gap-xs my-sm">
                {techUsed?.map((tech) => (
                    <MainTag key={tech} name={tech} />
                ))}
            </div>
        </>
    )
}

export default ArticleHeader;

