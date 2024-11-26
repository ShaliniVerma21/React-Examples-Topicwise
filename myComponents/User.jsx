import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Occupation: {props.occupation}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string,
};

User.defaultProps = {
  occupation: 'Software Engineer',
};

export default User;