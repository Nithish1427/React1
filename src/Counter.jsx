import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function Inc() {
        setCount(count + 1);
    }

    // for avoiding the difference in the display value and print value
    useEffect(() => {
        console.log(count);
    }, [count]);

    return(
        <>
            <h2 className="m-5">{count}</h2>
            <button className="mx-5" onClick={Inc}>Up</button>
        </>
    );
}

export default Counter