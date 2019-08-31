import React from 'react';

import './App.css';
import UserCard from "./components/User";

function App() {
  return (
    <div className="App">
      <UserCard first_name="admin" last_name="Ant"/>
    </div>
  );
}

export default App;
