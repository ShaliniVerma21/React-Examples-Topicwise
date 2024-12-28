import React, { useState, useCallback } from "react";
var funccount = new Set();

export default function UseCallBack2() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
 
    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
 
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "end",
                margin: "auto",
                marginTop: "20px",
                width: "350px",
                padding: "50px",
                height: "300px",
                fontSize: "20px",
                boxShadow: "0px 2px 8px 4px grey",
                borderRadius: "5px",
            }}
        >
           
            <h2 style={{ color: "green" }}>
               useCallback Hook
            </h2>
            <p>Count: {count}</p>
            <p>Function Count: {funccount.size}</p>
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                Increase number
            </button>
        </div>
    );
};