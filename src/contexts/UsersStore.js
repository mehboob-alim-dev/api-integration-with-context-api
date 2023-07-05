import React, { useState, useEffect } from "react";
import axios from "axios";

export const UsersStore = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>{children(users)}</>;
};
