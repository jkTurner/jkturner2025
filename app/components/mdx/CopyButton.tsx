'use client'

const CopyButton = () => {

    const handleClick = () => {
        alert('Copied!')
    }

    return (
        <button onClick={handleClick} className="text-xs text-[var(--foreground)] absolute top-2 right-[20px]">
            Copy
        </button>
    )
}

export default CopyButton;