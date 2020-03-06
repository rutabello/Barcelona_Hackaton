import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import ButtonUserLogged from './components/ButtonUserLogged/ButtonUserLogged'
import UserProfile from './components/UserProfile/userprofile'
import DropdownCategories from './components/DropdownCategories/dropdown';
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
      </Route>
      <Route path='/tacleclick'>
      <ClickKill />
      </Route>
      </Switch>
      <Footer />



    </div>
  );
}
}
export default App;
