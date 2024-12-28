/*
Timer Example
This example shows how to create a timer that updates every second.
*/
import React, { useState, useEffect } from 'react';

export default function UseEffect5() {
        const [seconds, setSeconds] = useState(0);
    
        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
    
            // Cleanup function
            return () => clearInterval(interval);
        }, []); // Runs once on mount
    
        return <h1>Timer: {seconds} seconds</h1>;
    }