// Array State Example
import React, { useState } from 'react';

export default function Usestate2() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
