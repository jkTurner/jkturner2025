
interface ListBlockProps {
    header?: string;
    listItems: string[];
}

const ListBlock = ({ header, listItems }: ListBlockProps) => {
    return (
        <div className="flex flex-col gap-xs">
            {header && (
                <h3 className="text-[var(--foreground)] font-medium">{header}</h3>
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