
interface ListBlockProps {
    header?: string;
    listItems: string[];
}

const ListBlock = ({ header, listItems }: ListBlockProps) => {
    return (
        <div className="flex flex-col gap-xs">
            {header && (
                <h4 className="text-[var(--foreground)]">{header}</h4>
            )}
            <ul>
                {Array.isArray(listItems) &&
                    listItems.map((item, index) => (
                    <li key={`${item}-${index}`}>- {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListBlock;