import React, { useState, useEffect } from "react";
import axios from "axios";

export const PostsStore = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>{children(posts)}</>;
};
