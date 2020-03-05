import React, { Component, Fragment } from 'react';
import '../SmallSquare/SmallSquare.css';

export default class SmallSquare extends React.Component {

    render(){
        return(
            // SmallSquare.state.display = false ? return counter : return counter + 1 and it changes back to false
            <div className="cuadro">
                <div className="galeria">
                    {this.props.show
                        ? <div id="Image" onClick={this.props.itemClicked}>
                            <img src="/barca.png" />
                        </div>
                        : null
                    }
                </div>
            </div>
        )
    }
}
