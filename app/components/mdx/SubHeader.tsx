interface SubHeaderProps {
    header: string;
}

const SubHeader = ({ header }: SubHeaderProps) => {
    return (
        <h2
            className="text-[var(--foreground)] font-medium text-sm mb-xs"
            itemScope
            itemType="https://schema.org/WebPageElement"
            itemProp="headline"
        >
            {header}
        </h2>
    );
};

export default SubHeader;
