import Link from "next/link";

interface RefLinkProps {
    text: string;
    link: string;
}

const RefLink = ({ text, link }: RefLinkProps) => {
    return (
        <Link href={link} target="blank">
            <span className="bg-[var(--accentMute)] text-[var(--background)] font-medium tracking-wide text-micro px-xs py-[2px] mx-xs rounded-sm">{text}</span>
        </Link>
    )
}

export default RefLink;