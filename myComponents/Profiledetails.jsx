import React from 'react'
import Profile from './Profile';
import linkedin from './Image/linkedin.png';

export default function Profiledetails() {
    const profileProps = {
        title: 'Kabir Tyagi',
        age: 30,
        address: {
          street: '123 Main St',
          city: 'Bengaluru'
        },
        hobbies: ['reading', 'hiking', 'coding'],
        handleClick: () => console.log('Button clicked!'),
        isAdmin: true,
        occupation: 'Software Engineer',
        fathername: 'Rajveer Tyagi',
        avatar: <img src={linkedin} alt="Custom Avatar" />,
        contacts: (
          <>
            <p>Email: tyagi@gmail.com</p>
            <p>Phone: 5551234567</p>
          </>
        )
      };
  return (
    <>
    <Profile {...profileProps} />
    </>
  )
}
