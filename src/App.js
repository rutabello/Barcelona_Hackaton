import React from 'react';
import './App.css';
import GamePicture from './Components/GamePicture/gamepicture';
import Points from './Components/Points/pointname';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GamePicture />
        <Points />
        
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
