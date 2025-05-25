'use client'
import { useCallback, useState } from "react";
import Child from "./Child";

const TestingPage = () => {
    
    const [count, setCount] = useState(0);

    const incrementClicked = () => {
        setCount(c => c + 1);
        console.log("Incremented ", count);
    }

    // const handleClick = () => {
    //     console.log("Clicked!");
    // };

    const handleClick = useCallback(() => {
        console.log("Clicked!")
    }, []);

    return (
        <div>
            <button className="bg-sky-700 p-sm" onClick={incrementClicked}>Increment</button>
            <Child onClick={handleClick} />
        </div>
    )
}

export default TestingPage;