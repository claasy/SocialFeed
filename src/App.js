import React, { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import AddEntryForm from './components/AddEntryForm';


function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', date: '11-23-2021', post: 'I love playing guitar. Does anyone want to play with me?'}])
  
  
  return (
    <div>
      <DisplayPosts entries = {entries} />
      <AddEntryForm />

    </div>
  );
}

export default App;
