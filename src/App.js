import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";

function App() {
  //general entry/entries
  const [entries, setEntries] = useState([
    {
      name: "David Lagrange",
      date: "11-23-2021",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      name: "JJ Vega",
      date: "07-15-2020",
      post: "cool dude!"
    }
  ]);

  const tempTestRcd = {
    name: "Cash",
    post: "Some cool text from an awesome instructor",
  };
  const tempTestRcd2 = {
    name: "JJ",
    post: "Some cool text from an awesome instructor",
  };

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPosts entries={entries} />
      <Post record={tempTestRcd} />
      <Post record={tempTestRcd2} />
    </div>
  );
}

export default App;
