import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function Inc() {
        setCount(count + 1);
        console.log(count); 
        // prints from 0, since setCount is an asynchronous function
        // to avoid this, create useEffect and print count with that
    }

    return(
        <>
            <h2 className="m-5">{count}</h2>
            <button className="mx-5" onClick={Inc}>Up</button>
        </>
    );
}

export default Counter