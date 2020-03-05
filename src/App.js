import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import ButtonUserLogged from './components/ButtonUserLogged/ButtonUserLogged'
import UserProfile from './components/UserProfile/userprofile'
const UserExample = {
  name :"Pepito ScrumMaster",
  img: "https://avatars3.githubusercontent.com/u/59797566?s=460&v=4",
  mail: "amamama@dkdkdkd.com",
  age: '28',
  points: 20

};

class App extends Component{
  state={
    user:{}
  }
  simulateUserLogged =()=>{
    this.setState({
      user:UserExample
    })
  }
  render(){
  return (
    <div className='App'>
      
      <Navbar />
      <ButtonUserLogged userHere={this.simulateUserLogged} />
      <UserProfile userprof={this.state.user}/>
      <Footer />
      {/* {this.state.user && <h3>{this.state.user.name}</h3>} */}

      <AppCapitals />

    </div>
  );
}
}
export default App;
