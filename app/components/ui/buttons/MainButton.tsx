

interface MainButtonProps {
    name: string;
}

const MainButton: React.FC<MainButtonProps> = ({ name }) => {
    return (
        <button className="px-[20px] py-[8px] bg-accent cursor-pointer">
            <h4 className="text-[var(--backgroundOverlay)]">{name}</h4>
        </button>
    )
}

export default MainButton;