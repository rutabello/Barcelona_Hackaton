import React , { Component } from 'react';
import './gamepicture.css';
import img1 from './img1.jpg';  
import img2 from './img2.jpg';  
import img3 from './img3.jpg';  
import img4 from './img4.jpg';  
import img5 from './img5.jpg';  
import img6 from './img6.jpg';  
import img7 from './img7.jpg';  
import img8 from './img8.jpg';  
import img9 from './img9.jpg';  
import img10 from './img10.jpg';  
import img11 from './img11.jpg';  
import img12 from './img12.jpg';  



class GamePicture extends Component {


    render() {
      return (
        <div>
        <h1>Galeria de Imagenes</h1>
        
          <div className="cuadro">
                <div className="galeria">
                <img className="imagenes" src={img1} alt=""></img>
                <img className="imagenes" src={img2} alt=""></img>
                <img className="imagenes" src={img3} alt=""></img>
                <img className="imagenes" src={img4} alt=""></img>
                <img className="imagenes" src={img5} alt=""></img>
                <img className="imagenes" src={img6} alt=""></img>
                <img className="imagenes" src={img7} alt=""></img>
                <img className="imagenes" src={img8} alt=""></img>
                <img className="imagenes" src={img9} alt=""></img>
                <img className="imagenes" src={img10} alt=""></img>
                <img className="imagenes" src={img11} alt=""></img>
                <img className="imagenes" src={img12} alt=""></img>
                </div>
            </div>
           </div>
      )
    }
  }
  
  export default GamePicture 