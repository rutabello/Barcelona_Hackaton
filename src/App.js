import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import DropdownCategories from './components/DropdownCategories/dropdown'
import GeoChallenge from './components/Games/GeoChallenge';

function App() {
  return (
    <div className="App">

      <Navbar />
      <DropdownCategories />
      {/* <AppCapitals/> */}
      <GeoChallenge />
      <Footer />


    </div>
  );
}

export default App;
