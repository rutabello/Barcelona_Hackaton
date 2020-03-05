import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer';
//import AppCapitals from './Components/Games/ChoseCapitals/appCapitals';
//import DropdownCategories from './Components/DropdownCategories/dropdown';
import BigBoard from './Components/Games/ClickKill/BigBoard'



function App() {

   
      return ( 
          <div id="board">
          <Navbar />
          
           <BigBoard />

            <div className="App">
              <Footer />
            </div>
              </div>
      )
    
}

export default App;


//<AppCapitals/>
//<DropdownCategories />
  