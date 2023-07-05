import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";
import { Store } from "./contexts/Store";

function App() {
  return (
    <div className="container mt-5">
      <Store>
        {(users, posts) => (
          <>
            <Users users={users} />
            <Posts posts={posts} />
          </>
        )}
      </Store>
    </div>
  );
}

export default App;
