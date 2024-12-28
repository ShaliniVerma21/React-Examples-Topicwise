//Managing Input Field State
import React, { useState } from 'react';

export default function Usestate5() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}
