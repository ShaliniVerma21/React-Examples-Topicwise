/*
Conditional Effects
This example demonstrates how to conditionally run an effect based on 
a state variable.
*/
import React, { useState, useEffect } from 'react';

export default function UseEffect4() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            console.log('Component is visible');
        }
    }, [isVisible]); // Runs when `isVisible` changes

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Component
            </button>
            {isVisible && <p>The component is now visible!</p>}
        </div>
    );
}
