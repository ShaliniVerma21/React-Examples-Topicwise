import React, { useState } from 'react';

export default function Usestate3() {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>This is some text that can be toggled.</p>}
        </div>
    );
}