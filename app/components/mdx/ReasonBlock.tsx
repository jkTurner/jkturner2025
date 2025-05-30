interface ReasonBlockProps {
    reason?: string;
    detail: string;
}

const ReasonBlock = ({ reason = "Reason:", detail }: ReasonBlockProps) => {
    return (
        <section 
            className="flex flex-col gap-sm mb-md"
            itemScope
            itemType="https://schema.org/WebPageElement"
        >
            <meta itemProp="name" content={reason} />

            <h2 
                className="text-[var(--foreground)] font-medium"
                itemProp="headline"
                >{reason}</h2>

            <div className="flex gap-sm">
                <div className="h-auto w-[8px] bg-[var(--accent)]" />
                <div className="w-full">
                    <p itemProp="description">
                        {detail}
                    </p>
                </div>
            </div>

        </section>
    )
}

export default ReasonBlock;