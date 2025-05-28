interface ErrorBlockProps {
    error: string;
}

const ErrorBlock = ({ error }: ErrorBlockProps ) => {
    return (
        <div className="flex flex-col gap-sm text-[var(--foreground)]">
            <h3 className="">Error:</h3>
            <div className="bg-red-900 w-full p-xs text-xs">
                <p>{error}</p>
            </div>
        </div>
    )
}

export default ErrorBlock;