interface SubHeaderProps {
    header: string;
}

const SubHeader = ({ header }: SubHeaderProps) => {
    return (
        <h2 className="text-[var(--foreground)] font-medium tex-sm">{header}</h2>
    )
}

export default SubHeader;