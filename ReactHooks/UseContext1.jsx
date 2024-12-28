import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function UseContext1() {
   let { theme, setTheme } = useContext(ThemeContext)
   return (
      <>
         <div style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <div>
               <select value={theme.backgroundColor}
                  onChange={
                     (e) => {
                        setTheme({
                           ...theme,
                           backgroundColor: e.target.value
                        })
                     }
                  } >
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                  <option value="gray">Gray</option>
                  <option value="orange">Orange</option>
               </select>
            </div>
            <div>Hello World</div>
         </div>
      </>
   )
}
