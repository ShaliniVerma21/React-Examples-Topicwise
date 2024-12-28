import React from 'react'
import { useState, useEffect } from "react"
export default function UseEffect3() {
   /*
    JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. 
    It is commonly used to communicate between a client (browser) and a server in web applications.
   
    Syntax:
   
   JSON data is represented as key-value pairs.
   Keys must be strings enclosed in double quotes ("key").
   
   Values can be: Strings (in double quotes), Numbers, Booleans (true, false), Null, Arrays, Nested objects

   Example- 
   {
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "Java"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}


   Common Use Cases:

   1. Exchanging data between client and server.
   2. Storing configuration files.
   3. Storing and reading data in localStorage or sessionStorage.

   Limitations: JSON does not support functions, undefined values, or circular references.
   */

   const [data, setData] = useState([])
   const [isLoading, setLoading] = useState([])
   useEffect(() => {
      if (isLoading)
         document.title = "Loading popular names..."
      else
         document.title = "Popular name list"
      let interval = setInterval(() => {
         setLoading(true)
         fetch("person.json")
            .then((response) => response.json())
            .then((json) => { console.log(json); setLoading(false); setData(json); })
      }, 5000)
      return () => { clearInterval(interval) }
   })
   return (
      <div>
         {isLoading && <span>loading...</span>}
         {!isLoading && data && <span>Popular names: </span>}
         {!isLoading && data && data.map((item) =>
            <span key={item.id}>{item.name} </span>
         )}
      </div>
   )
}