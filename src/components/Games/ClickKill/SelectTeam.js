import React, { Component } from "react";
import "./SelectTeam.css";




const SelectTeam = props => {
    console.log(props)
    return (

        <div id="TeamContainer">
            <h1>Qual Equipo quieres eliminar?</h1>
          
            <div className="img-container">
                {props.imageList.map((equipo)=>{                         
                    return (
                        <div className="img-team">
                            <img id={equipo.toString()} onClick={props.printName} src={equipo} height="80px"/>
                        </div>
                    )
                    })}
                    
            </div>
           
    </div>
)
}



export default SelectTeam;