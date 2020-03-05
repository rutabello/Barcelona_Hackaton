import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import DropdownCategories from './components/DropdownCategories/dropdown';
import SmallSquare from './components/SmallSquare';



export default class BigBoard extends React.Component {
  state = {
    squareIndex: null,
    clickedIndex: false,
    counter: 0,
    smallSquaresArray: ["", "", "", "", "", "", "", "", ""]
  }
  
  delay = 1000;

  chooseSmallSquare = () => {
    let randomIndex = Math.floor(Math.random() * this.state.smallSquaresArray.length);
    this.setState ({
      squareIndex: randomIndex
    })
  }

  onEndTimer = () => {
    if(this.state.clickedIndex === true){
      this.setState({
        clickedIndex: false, 
        counter: this.state.counter + 1
      })
      this.delay = this.delay - 50;
      console.log("success")
      this.onClickStart()
    } else {
      console.log("finished")
    }
  }

  itemClicked = () => {
    this.setState({
      clickedIndex: true
    })
  }

  onClickStart = () => {
    // Set 1st random index
    this.chooseSmallSquare()
    // Update random index each 2s
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter    
    setTimeout(this.onEndTimer,
      this.delay)
  }


  restartCounter = () => {
    this.setState ({
      counter: 0
    })
    this.delay = 1000
  }

    render() {
      return ( 
        <Fragment>
          <div id="board">
          <Navbar />
            <DropdownCategories />
            <AppCapitals/>
            { 
              this.state.smallSquaresArray.map((x, index) => 
              //turns show to true if index of the smallsquare == the squareIndex rendered by the chooseSmallSquare function
                  <SmallSquare show={index === this.state.squareIndex} itemClicked={this.itemClicked}/>
              )}
              <p>{this.state.counter}</p>
              <button onClick={this.onClickStart}>START</button>
              <button onClick={this.restartCounter}>RESET THE RESULT</button>
            </div>

            <div className="App">
              <Footer />
            </div>
        </Fragment>
      )
    }
}



// function App() {
//   return (
//     <div className="App">


//export default App;
