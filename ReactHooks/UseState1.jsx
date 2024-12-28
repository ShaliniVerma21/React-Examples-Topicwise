//Object State Example
import React, { useState } from 'react';

export default function UseState1() {
    const [profile, setProfile] = useState({ name: '', age: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={profile.age}
                onChange={handleChange}
            />
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    );
}
