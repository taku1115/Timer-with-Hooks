import React from 'react';
import './App.css';
import Timer from './containers/Timer'

function App() {
  return (
    <div className="App">
      <Timer limit={60}/>
    </div>
  );
}

export default App;
