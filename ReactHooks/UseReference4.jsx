import React, {useState, useRef} from 'react'
//Animating a DOM Element
export default function UseReference4() {
    const boxRef = useRef(null);

    const handleAnimate = () => {
        boxRef.current.style.transition = 'transform 0.5s';
        boxRef.current.style.transform = 'translateX(100px)';
    };

    return (
        <div>
            <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'blue' }} />
            <button onClick={handleAnimate}>Animate Box</button>
        </div>
    );
}