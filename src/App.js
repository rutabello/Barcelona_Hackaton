import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import DropdownButton from 'react-bootstrap/DropdownButton';


function App() {
  return (
    <div className="App">

      <Navbar />
      <AppCapitals/>
      <Footer />


    </div>
  );
}

export default App;
