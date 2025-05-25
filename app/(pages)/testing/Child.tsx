import React from "react";

interface ChildProps {
    onClick: () => void;
}

const Child: React.FC<ChildProps> = ({ onClick }) => {
    console.log("Child rendered");
    return (
        <div>
            <button className="bg-pink-700 p-sm" onClick={onClick}>Child Button</button>
        </div>
    )
}

export default React.memo(Child);