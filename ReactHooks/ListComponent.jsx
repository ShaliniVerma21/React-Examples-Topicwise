import React from 'react'

function ListComponent(props) {
   const items = props['items'];
   const handleClick = props['handleClick']
   console.log("I am inside the ListComponent")
   return (
      <div>
         {items.map((item, idx) =>
            <span key={idx} onClick={handleClick}>{item} </span>
         )}
      </div>
   )
}
export default React.memo(ListComponent)