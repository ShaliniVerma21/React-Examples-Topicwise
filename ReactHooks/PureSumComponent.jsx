import React from "react";

function PureSumComponent(props) {
   const range = props['range'];
   const start = range[0];
   const end = range[1];
   console.log('I am inside PureSumComponent')
   var sum = 0;
   for(let i = start; i <= end; i++) {
      sum += i;
   }
   return (
      <div>
         <div>Summation of values from <i>{start}</i> to
            <i>{end}</i>: <b>{sum}</b></div>
      </div>
   )
}
export default React.memo(PureSumComponent)