import React, { useEffect, useRef, useState } from 'react';
//Using useRef with a Timer
export default function UseReference5() {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timerRef.current); // Cleanup on unmount
        };
    }, []);

    return <h1>Seconds: {seconds}</h1>;
}