import React,{useMemo,useCallback,useState,useEffect} from 'react'
import ListComponent from './ListComponent'
export default function UseCallBack1() {
   // array of numbers
   const listOfNumbers = useMemo(() => [...Array(100).keys()], []);
   
   // callback function
   const handleCallbackFn = useCallback((e) => console.log(e.target.innerText), [])
   const [currentTime, setCurrentTime] = useState(new Date())
   useEffect(() => {
      let interval = setInterval(() => {
         setCurrentTime(new Date())
      }, 1000)
      return () => clearInterval(interval)
   }, [currentTime])
   return (
      <div style={ { padding: "5px" } }>
         <ListComponent items={listOfNumbers} handleClick={handleCallbackFn}/>
         <div>Time: <b>{currentTime.toLocaleString().split(',')[1]}</b></div>
      </div>
   );
}