import React, {useState, useRef} from 'react'
//Managing Focus in a Form
export default function UseReference3() {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Input 1: ${input1Ref.current.value}, Input 2: ${input2Ref.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={input1Ref} type="text" placeholder="Input 1" />
            <input ref={input2Ref} type="text" placeholder="Input 2" />
            <button type="submit">Submit</button>
        </form>
    );
}