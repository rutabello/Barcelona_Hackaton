import React, { Component, Fragment } from 'react';
import Games from './gameCapitals.css';

import media1 from './img/social media-01.png'
import media2 from './img/social media-02.png'
import media3 from './img/social media-03.png'
import './chose.css'
//to put in a random order the array
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


class GameCapitals extends Component{
state={
    countries:[], //save the data api that is going to change by the way the play develop
    gameStatus:'startGame', //there is 3 states of the game to show the diferent elements in this game(start/playing/end)
    fourCapitals:[],//where we save all the answers shuffled
    incorrecto:'',//message for the wrong answer
    seconds:30, //time remaining for the counter
    points:0 
}

getCountry=()=>{
    let arrayCountries=[]
    this.props.countries.map((country)=>{
        //save api in array
        return arrayCountries.push(country)
    })
    //save always the first 4 capitals because we ara changing the arrayCountries by splicing the first 4 countries to avoid repeating them
    let fourCapitals= [arrayCountries[0].capital, arrayCountries[1].capital, arrayCountries[2].capital, arrayCountries[3].capital]
    //always saved in diferent orders
    Shuffle(fourCapitals)
    this.setState({
        countries:arrayCountries, 
        gameStatus:'playingGame', //change to the game part
        fourCapitals
    })
    

    const countdown=()=>{
        //prepare the counter
        if (this.state.seconds <= 0) {
            //when it's finished
            this.setState({
                gameStatus:'gameOver'
            })
            //finish counter
            clearTimeout(timerId);
        } else {
            //update the counter resting the seconds
            this.setState({
                seconds:this.state.seconds-1
            })
        }
    }
    //interval for the counter
    var timerId = setInterval(countdown, 1000);
    
}

chooseCapital=(e)=>{
   //recover the buton clicked for the capital by the id where we save the name of the capital
 if(this.state.countries[0].capital===e.target.id){
     let cutCountries=[...this.state.countries]
     //also we cut the first 4 to avoid repeating the names becouse we catch the first 4 and update the array
     cutCountries.splice(0, 4)
     let fourCapitals= [cutCountries[0].capital, cutCountries[1].capital, cutCountries[2].capital, cutCountries[3].capital]
     Shuffle(fourCapitals)

     
     this.setState({
         //When the answer is right: update countries and capitals, sum seconds and points and hide incorrect message
         countries:cutCountries, 
         fourCapitals,
         incorrecto:'',
         seconds:this.state.seconds+4,
         points:this.state.points+10

     })
    
 }else{
     this.setState({
         //when it is incorrect:
        incorrecto:'INCORRECTO!',
        seconds:this.state.seconds-3
        }) 
 }
}
tryAgain=()=>{
    //in the last state of the game 'end' when we click again  we call the function for playingGame status and change the state for showing this part and reload the default state
    this.getCountry()
    this.setState({
        incorrecto:'',
        seconds:30,
        gameStatus: 'playingGame',
        points:0
    })

}


render(){
    return(
<Fragment >
{/*START PART */}
    <div className='container-game'>
        {this.state.gameStatus==='startGame'&& <div className='startGame-page'>
        <div className='logo'>
            <button className='startGame-button' onClick={this.getCountry}></button>
            
            <button onClick={this.props.back} className='back-menu'>Exit Game</button></div>
    
    </div> }

    {/*GAMING PART */}
    {this.state.gameStatus==='playingGame'&&
    <div className='playingGame'>
    <div className='counterGame-button'>{this.state.seconds}</div>   
    <p className='incorrecto'>{this.state.incorrecto}</p>  
        <div className='country'>{this.state.countries.length>0&&this.state.countries[0].name}</div>
        <div className='flex-butons-capitals'>
        {this.state.fourCapitals.map((capital, index)=>{
            return <button className='choose-capital' onClick={this.chooseCapital} key={index} id={capital}>{capital}</button>
        })}</div>
        <div className='score'>SCORE: {this.state.points}</div>
        <button onClick={this.props.back} className='back-menu'>X</button>
    </div>}

    {/*GAMEOVER PART */}
    {this.state.gameStatus=='gameOver'&&<div className='playingGame'>
        <p className='gameover'>GAME OVER</p>
        <p className='score'>Score: {this.state.points}</p>
        <div className='shered-link'>
            <img src={media2} alt=''></img>
            <img src={media1} alt=''></img>
            <img src={media3} alt=''></img>
        </div>
        <button className='play-again' onClick={this.tryAgain}>Play Again</button>
        <button onClick={this.props.back} className='back-menu'>Exit Game</button>
        {/*MOSTRAR EL COMPONENT DE PUNTOS GANADOS */}
    </div>}
    </div>
</Fragment>

)}

}
export default GameCapitals