interface ReasonBlockProps {
    reason?: string;
    detail: string;
}

const ReasonBlock = ({ reason = "Reason:", detail }: ReasonBlockProps) => {
    return (
        <div className="flex flex-col gap-sm">
        <h2 className="text-[var(--foreground)] font-medium">{reason}</h2>
        <div className="flex gap-sm">
            <div className="h-auto w-[8px] bg-[var(--accent)]" />
            <div className="w-full">
                <p>
                    {detail}
                </p>
            </div>
        </div>
        </div>
    )
}

export default ReasonBlock;