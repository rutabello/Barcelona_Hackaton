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
    
  }
  simulateUserLogged =()=>{
    this.setState({
      user:UserExample

    })
  }
  userOff =()=>{
    this.setState({
      user:{}
    })
  }
  render(){
  return (
    <div className='App'>
    
      <Navbar />
      <DropdownCategories />
      <ButtonUserLogged userHere={this.simulateUserLogged} />
      <UserProfile userprof={this.state.user}/>
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
