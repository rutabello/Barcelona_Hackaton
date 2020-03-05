import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';

function App() {
  return (
    <div className="App">
      
       <Navbar/> 

      <AppCapitals/>

    </div>
  );
}

export default App;
