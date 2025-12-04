/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/refs */
// Counter --> Consumer Component

import { useState, useEffect, useContext, useRef } from "react";
import { dataContext } from "./Home";

function Counter() {

    let refCount = useRef(0);

    const data = useContext(dataContext);

    const [count, setCount] = useState(0);

    // Updater Function
    function Inc() {
        // setCount(count + 1);
        refCount.current ++;
    }

    // for avoiding the difference in the display value and print value
    useEffect(() => {
        // console.log(count);
        console.log(refCount);
    });

    return(
        <>
            <h2>{data}</h2>
            <h2 className="m-5">{refCount.current}</h2>
            <button className="mx-5 btn btn-primary" onClick={Inc}>Up</button>
            <button className="mx-5 btn btn-secondary" onClick={() => setCount(refCount.current)}>Update</button>
        </>
    );
}

export default Counter