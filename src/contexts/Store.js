import React from "react";
import { UsersStore } from "../contexts/UsersStore";
import { PostsStore } from "../contexts/PostsStore";

export const Store = ({ children }) => {
  return (
    <UsersStore>
      {(users) => (
        <PostsStore>
          {(posts) => (
            <>
              {/* Pass users and posts to the children */}
              {children(users, posts)}
            </>
          )}
        </PostsStore>
      )}
    </UsersStore>
  );
};
