import React from 'react'
import PropTypes from 'prop-types';
import imge from './Image/imge.png';

function Profile(props) {

    //Javascript single line comment

    /* 
    Javascript Multiline Comment
    */

    { /* JSX Comment used for single line and multiline comment */ }


    return (
        <>
            {/*title: a string prop*/}
            <h1>{props.title}</h1>

            {/*age: a number prop*/}
            <p>Age: {props.age}</p>

            {/*address: an object prop with street and city properties*/}
            <p>Address: {props.address.street}, {props.address.city}</p>
            <ul>
                {/*hobbies: an array prop*/}
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

            {/*handleClick: a function prop*/}
            <button onClick={props.handleClick}>Click me!</button>

            {/*isAdmin: a boolean prop*/}
            <p>Is admin: {props.isAdmin ? "Yes" : "No"}</p>

            {/*Passing a null prop*/}
            <p>Occupation: {props.occupation}</p>

            {/*Passing an undefined prop*/}
            <p>FatherName: {props.fathername}</p>

            {/*Passing a React element prop*/}
            {props.avatar}

            {/*Passing a React fragment prop*/}
            {props.contacts}
        </>
    );
}

Profile.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    occupation: PropTypes.string,
    fathername: PropTypes.string,
    avatar: PropTypes.element,
    contacts: PropTypes.elementType
};

Profile.defaultProps = {
    occupation: 'Software Engineer',
    fathername: '',
    avatar: <img src={imge} alt="Default Avatar" />,
    contacts: (
      <>
        <p>Email: default@example.com</p>
        <p>Phone: 555-555-5555</p>
      </>
    )
  };
export default Profile;