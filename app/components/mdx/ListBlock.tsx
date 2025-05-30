
interface ListBlockProps {
    header?: string;
    listItems: string[];
}

const ListBlock = ({ header, listItems }: ListBlockProps) => {
    return (
        <section 
            className="flex flex-col gap-xs mb-md"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {header && (
                <h3 
                    className="text-[var(--foreground)] font-medium"
                    itemProp="name"
                    >{header}
                </h3>
            )}

            <ul className="list-disc pl-md flex flex-col gap-[4px]" itemProp="itemListElement">
                {Array.isArray(listItems) &&
                    listItems.map((item, index) => (
                        <li 
                            key={`${item}-${index}`}
                            itemScope
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={(index + 1).toString()} />
                            <span itemProp="name">{item}</span>
                        </li>
                    ))}
            </ul>

        </section>
    )
}

export default ListBlock;