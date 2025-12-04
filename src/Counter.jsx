import { useState, useEffect } from "react";

function Counter(props) {

    const [count, setCount] = useState(0);

    // Updater Function
    function Inc() {
        setCount((preCount) => preCount + 1); // 0 + 1 = 1
        setCount((preCount) => preCount + 1); // 1 + 1 = 2
        // given as arrow/anonymous function
        // by this way, it takes the previous value of count instead of initial value of count
    }

    // for avoiding the difference in the display value and print value
    useEffect(() => {
        console.log(count);
    }, [count]);

    return(
        <>
            <h2>{props.value}</h2>
            <h2 className="m-5">{count}</h2>
            <button className="mx-5" onClick={Inc}>Up</button>
        </>
    );
}

export default Counter