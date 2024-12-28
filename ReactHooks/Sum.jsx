import React, {useState,useEffect,useMemo} from "react";

 function Sum() {
    let [currentTime, setCurrentTime] = useState(new Date())
    let [limit, setLimit] = useState(10);
    useEffect(() => {
       let interval = setInterval(() => setCurrentTime(new Date()), 1000)
       return () => { clearInterval(interval) }
    })
    const sum = useMemo(() => {
    var sum = 0;
    for(let i = 1; i <= limit; i++) {
       sum += i;
    }
       return sum;
    }, [limit])
    return (<div style={ {padding: "5px" } }>
    <div><input value={limit} onChange={ (e) => { setLimit(e.target.value) }} /></div>
       <div>Summation of values from <i>1</i> to <i>{limit}</i>: <b>{sum}</b></div>
       <div>Time: <b>{currentTime.toLocaleString().split(',')[1]}</b></div>
    </div>)
 }
 export default Sum