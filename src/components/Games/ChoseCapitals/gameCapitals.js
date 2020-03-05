import React, { Component, Fragment } from 'react';

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
    onlyCountries:[],
    gameStatus:'startGame',
    fourCapitals:[],
    incorrecto:'',
    seconds:30,
    gameOver: false,
    points:0
}

getCountry=()=>{
    let arrayCountries=[]
    this.props.countries.map((country)=>{
        return arrayCountries.push(country)
    })
    console.log(arrayCountries);
    let fourCapitals= [arrayCountries[0].capital, arrayCountries[1].capital, arrayCountries[2].capital, arrayCountries[3].capital]
    Shuffle(fourCapitals)
    this.setState({
        onlyCountries:arrayCountries,
        gameStatus:'playingGame',
        fourCapitals
    })
    

    const countdown=()=>{
        if (this.state.seconds <= -1) {
            this.setState({
                gameStatus:'gameOver'
            })

            clearTimeout(timerId);
        } else {
            this.setState({
                seconds:this.state.seconds-1
            })
        }
    }
    var timerId = setInterval(countdown, 1000);
    
}

chooseCapital=(e)=>{
    
 if(this.state.onlyCountries[0].capital===e.target.id){
     let cutCountries=[...this.state.onlyCountries]
     
     cutCountries.splice(0, 4)
     let fourCapitals= [cutCountries[0].capital, cutCountries[1].capital, cutCountries[2].capital, cutCountries[3].capital]
     Shuffle(fourCapitals)

     
     this.setState({
         onlyCountries:cutCountries,
         fourCapitals,
         incorrecto:'',
         seconds:this.state.seconds+4,
         points:this.state.points+100

     })
    
 }else{
     this.setState({
        incorrecto:'INCORRECTO!',
        seconds:this.state.seconds-3,
        points:this.state.points-50
        }) 
 }
}
tryAgain=()=>{
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
<Fragment>
    {this.state.gameStatus==='startGame'&& <button onClick={this.getCountry}>Play!</button>}
    
    {this.state.gameStatus==='playingGame'&&<div> 
        <p>{this.state.onlyCountries.length>0&&this.state.onlyCountries[0].name}</p>
        {this.state.fourCapitals.map((capital, index)=>{
            return <button onClick={this.chooseCapital} key={index} id={capital}>{capital}</button>
        })}
        <p>{this.state.seconds}</p>
        <p>{this.state.incorrecto}</p>
        <p>{this.state.points}</p>   
    </div>}

    {this.state.gameStatus=='gameOver'&&<div>
        <p>'GAME OVER'</p>
        <button onClick={this.tryAgain}>Try Again!</button>
        {/*MOSTRAR EL COMPONENT DE PUNTOS GANADOS */}
    </div>}
</Fragment>

)}

}
export default GameCapitals