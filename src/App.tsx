import React from 'react';
import './App.css';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <Timer limit={4}/>
    </div>
  );
}

export default App;
