import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <h2 className="text-center">Users Api</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
