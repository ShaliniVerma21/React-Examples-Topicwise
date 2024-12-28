import React from 'react'
import { useState, useEffect } from "react";

export default function UseEffect1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
  
    return <h1>I've rendered {count} times!</h1>;
  }
  