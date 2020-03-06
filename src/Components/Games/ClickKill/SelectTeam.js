import React, { Component } from "react";
import "./SelectTeam.css";
import styled, {css} from 'styled-components';




const SelectTeam = props => {
    console.log(props)
    return (

        <div id="team-container">
            <div id="team-title"></div>
            <h3 id="team-subtitle">Haz un Clic al logo para vencer al adversario</h3>
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