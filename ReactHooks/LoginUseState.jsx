import React, { useState } from 'react';

export default function LoginUseState() {
    const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   
   let isEmpty = (val) => {
      if(val == null || val == '') {
         return true;
      } else {
         return false;
      }
   }
   
   let validate = (e) => {
      e.preventDefault()
      if(!isEmpty(username) && !isEmpty(password)) {
         alert(JSON.stringify({
            username: username,
            password: password
         }))
      } else {
         alert("Please enter username / password")
      }
   }
  return (
    <div style={{ textAlign: "center", padding: "5px" }}>
    <form name="loginForm">
       <label for="username">Username: </label>
          <input id="username" name="username" type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
       <br />
       <label for="password">Password: </label>
          <input id="password" name="password" type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
       <br />
       <button type="submit" onClick={(e) => validate(e)}>Submit</button>
    </form>
 </div>
  )
}
