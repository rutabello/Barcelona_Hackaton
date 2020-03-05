import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Footer />

      <AppCapitals/>

    </div>
  );
}

export default App;
