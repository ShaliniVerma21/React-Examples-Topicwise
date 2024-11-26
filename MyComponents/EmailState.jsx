import React from 'react'
import { useState } from 'react'

export default function EmailState(props) {
    const [email, setEmail] = useState(props.defaultEmail)

    const changeEmailHandler = (e) => {
      setEmail(e.target.value)
    }
  
    return (
      <input type="text" value={email} onChange={changeEmailHandler} />
    );
  }