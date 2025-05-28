
interface MainTagProps {
    name?: string;
}

const MainTag = ({ name = "Tag" }: MainTagProps) => {
    return (
        <div className="py-[2px] px-[12px] bg-[var(--accent)]">
            <span className="text-xxs text-[var(--backgroundOverlay)]">{name}</span>
        </div>
    )
}

export default MainTag;