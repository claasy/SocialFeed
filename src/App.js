import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
import './App.css';
import './components/CustomButton/CustomButton';

function App() {

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


  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='card'>
        <div className='border-box'>
          <NavBar />
        </div>
        </div>
      </div>
      <div className='row'>
        <div className='card'>
        <div className='border-box'>
          <CreatePost addNewPostProperty={addNewPost} />
        </div>
        </div>
      </div>
      <div className='row'>
        <div className='card'>
        <div className='border-box'>
          <DisplayPosts entries={entries} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
