interface InlineProp {
    code: string;
}

const Inline = ({ code }: InlineProp) => {
    return (
        <span className="bg-[var(--backgroundCode)] text-[var(--code)] tracking-widest text-micro px-xs py-[2px] mx-xs rounded-sm">{code}</span>
    )
}

export default Inline;