import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function Inc() {
        setCount(count + 1);
        console.log(count); 
        // prints 0 when count displayed as 1, 1 when count is displayed as 2 and so on. 
        // since setCount is an asynchronous function.
        // to avoid this, create useEffect and print count with that.
    }

    return(
        <>
            <h2 className="m-5">{count}</h2>
            <button className="mx-5" onClick={Inc}>Up</button>
        </>
    );
}

export default Counter