import React,{useState,useEffect} from 'react'
import PureSumComponent from './PureSumComponent'

export default function UseMemo1() {
    var input = [1,1000]
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
       let interval = setInterval(() => {
          setCurrentTime(new Date())
       }, 1000)
       return () => clearInterval(interval)
    }, [currentTime])
    return (
       <div style={ {padding: "5px" } }>
          <PureSumComponent range={input}/>
          <div>Time: <b>{currentTime.toLocaleString().split(',')[1]}</b></div>
       </div>
    );
 }