import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function Inc() {
        setCount(count + 1);
        setCount(count + 1);
        // count should increase by 2 but it does not
        // since react does batch update
        // for both setCount it uses 0 as initial value.
        // so it increases by 1 only, not by 2.
        // to avoid this, use Updater Function
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