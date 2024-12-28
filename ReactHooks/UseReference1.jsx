import React, {useState, useRef} from 'react'

export default function UseReference1() {
    const [count, setCount] = useState(0)
   const inputRef = useRef(null)
   const labelRef = useRef(null)
   console.log("RefInput is (re)rendered")
   const handleClick = () => setCount(count + 1)
   const handleChange = () => labelRef.current.innerText = inputRef.current.
   value == "" ? "World" : inputRef.current.value
   return (
      <div>
         <div>
            Counter: {count} 
            <button onClick={handleClick}>+</button>
         </div>
            <div style={{ paddingTop: "5px"}}>
               <label>Enter your name: </label>
               <input type="text" name="username"
                  ref={inputRef} onChange={handleChange}/>
               <br />
            <div>Hello, <span ref={labelRef}></span></div>
         </div>
      </div>
   )
}
