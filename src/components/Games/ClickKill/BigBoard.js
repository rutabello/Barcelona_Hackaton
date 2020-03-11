import React, { Fragment } from 'react';
import SmallSquare from './SmallSquare';
import './BigBoard.css';
import SelectTeam from './SelectTeam';
import Alaves from './images/Alaves.png';
import Athletic from './images/Athletic.png';
import Atletico from './images/Atletico.png';
import Barcelona from './images/Barcelona.png';
import Betis from './images/Betis.png';
import Celta from './images/Celta.png';
import Eibar from './images/Eibar.png';
import Espanyol from './images/Espanyol.png';
import Getafe from './images/Getafe.png';
import Granada from './images/Granada.png';
import Levante from './images/Levante.png';
import Madrid from './images/Madrid.png';
import Mallorca from './images/Mallorca.png';
import Osasuna from './images/Osasuna.png';
import Rsociedad from './images/Rsociedad.png';
import Sevilla from './images/Sevilla.png';
import Valencia from './images/Valencia.png';
import Valladolid from './images/Valladolid.png';
import Villareal from './images/Villareal.png';
import Leganes from './images/Leganes.png';
import styled, {css} from 'styled-components';

const BigContainer = styled.div`
    position: relative;
   
`;

export default class BigBoard extends React.Component {
  state = {
    squareIndex: null,
    clickedIndex: false,
    teamChosen: false,
    counter: 0,
    smallSquaresArray: [{top: 0, left: 0}, {top: 0, left: 200}, {top: 0, left: 400},
       {top: 200, left: 0}, {top: 200, left: 200}, {top: 200, left: 400}, {top: 400, left: 0},
        {top: 400, left: 200}, {top: 400, left: 400}, {top: 100, left:500}],
    logoSelected: '',
    imageList: [
      Alaves,
      Athletic,
      Atletico,
      Barcelona,
      Betis,
      Celta,
      Eibar,
      Espanyol,
      Getafe,
      Granada,
      Levante,
      Madrid,
      Mallorca,
      Osasuna,
      Rsociedad,
      Sevilla,
      Valladolid,
      Valencia,
      Villareal,
      Leganes
    ]
  }
  
  delay = 2000;

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
      this.delay = this.delay - 100;
      console.log("success")
      this.onClickStart()
    } else {
      console.log("finished")
    }
  }

  itemClicked = () => {
    console.log('clicked!');
    
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
      counter: 0,
      teamChosen: false
    })
    this.delay = 2000
  }

  printName = (e) => {
      this.setState({
          logoSelected: e.target.id,
          teamChosen: true
      })
  }




    render() {
      return ( 
        <Fragment>
          {this.state.teamChosen == false 
          ? <SelectTeam printName={this.printName} imageList={this.state.imageList}/>
          : <div>
          <BigContainer>
          { 
            this.state.smallSquaresArray.map((x, index) => 
            //turns show to true if index of the smallsquare == the squareIndex rendered by the chooseSmallSquare function
                <SmallSquare top={x.top} left={x.left} logo={this.state.logoSelected} show={index === this.state.squareIndex} itemClicked={this.itemClicked}/>
            )}
          </BigContainer>
          <p>{this.state.counter}</p>
          <button onClick={this.onClickStart}>START</button>
          <button onClick={this.restartCounter}>RESET THE RESULT</button>
          </div>
        }
        </Fragment>
      )
    }
}
