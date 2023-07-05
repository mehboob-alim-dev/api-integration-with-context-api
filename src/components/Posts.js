import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h2 className="text-center">Posts Apiss</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
