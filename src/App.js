<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React, {Component} { Fragment }  from 'react';
>>>>>>> 664045d422373d4791591cf4a32855e9293f19c3
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import DropdownCategories from './components/DropdownCategories/dropdown';
import SmallSquare from './components/SmallSquare';
import ButtonUserLogged from './components/ButtonUserLogged/ButtonUserLogged'
import UserProfile from './components/UserProfile/userprofile'
import DropdownCategories from './components/DropdownCategories/dropdown'
import GeoChallenge from './components/Games/GeoChallenge';
import { Switch, Route, Link} from 'react-router-dom';
import ButtonGames from './components/ButtonGames/buttonGames';
import ClickKill from './components/Games/ClickKill/click'

const UserExample = {
  name :"Pepito ScrumMaster",
  img: "https://avatars3.githubusercontent.com/u/59797566?s=460&v=4",
  username: "Pepito",
  age: '28',
  points: 20



};

class App extends Component{
  state={
    user:{},
    timesCliked: false,

  }
  simulateUserLogged =()=>{
    this.setState({
      user:UserExample,
      timesCliked: true,

    })
  }
  userOff =()=>{
    this.setState({
      user:{},
      timesCliked: false,

    })
  }
  render(){
  return (
    <div className='App'>

      <Navbar />
      <div className="firstRow">
        <DropdownCategories />
        <UserProfile userprof={this.state.user}/>
        <ButtonUserLogged userHere={this.simulateUserLogged} quitUser={this.userOff} />

      </div>

      <Switch>
      <Route exact path ='/'>
      <ButtonGames />
      </Route>
      <Route path='/cityplay'>
      <AppCapitals/>
      <GeoChallenge />
      </Route>
      <Route path='/tacleclick'>
      <ClickKill />
      </Route>
      </Switch>
      <Footer />

  chooseSmallSquare = () => {
    let randomIndex = Math.floor(Math.random() * this.state.smallSquaresArray.length);
    this.setState ({
      squareIndex: randomIndex
    })
  }

<<<<<<< HEAD
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
=======

    </div>
  );
}
}
export default App;
>>>>>>> 664045d422373d4791591cf4a32855e9293f19c3
