import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';

function App(){
        //general entry/entries
  const [entries, setEntries] = useState([{name: 'David Lagrange', date: '11-23-2021', post: 'I love playing guitar. Does anyone want to play with me?'}])
  
  return (
    <div>
      <DisplayPosts entries = {entries} />
      <CreatePost />

    </div>
  );
}

export default App;
