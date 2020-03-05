import React, { Component, Fragment} from 'react';
import GameCapitals from './gameCapitals'
import './chose.css'
import axios from 'axios';

const Shuffle=(a)=>{
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class AppCapitals extends Component {
  state={
    data:[]
  }
  async componentDidMount(){
    const {data} = await axios(`https://restcountries.eu/rest/v2/all`)
    //change the order of the array of cuntries before saveing in the state
    let dataFiltered=data.filter((country)=>{
      return country.capital !== ''
    })
        this.setState({
          data: Shuffle(dataFiltered)
         })

  }
  



  render(){
  return (
 
      <GameCapitals className='margin' countries={this.state.data}/>

  );
}}

export default AppCapitals;
