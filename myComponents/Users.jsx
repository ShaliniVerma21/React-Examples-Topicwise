import React from 'react';
import User from './User';

function Users() {
  const users = [
    { id: 1, name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { id: 2, name: 'Jane Doe', age: 25, occupation: 'Designer' },
    { id: 3, name: 'Bob Smith', age: 40 },
  ];

  return (
    <div>
      {users.map((user) => (
        <User key={user.id}
          name={user.name}
          age={user.age}
          occupation={user.occupation} />
      ))}
    </div>
  );
}

export default Users;