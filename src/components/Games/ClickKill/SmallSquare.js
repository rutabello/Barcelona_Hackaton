import React, { Component, Fragment } from 'react';
import styled, {css} from 'styled-components';

import './BigBoard.css'

const SquareContainer = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`;

const SmallSquare = props =>(
    // SmallSquare.state.display = false ? return counter : return counter + 1 and it changes back to false
    props.show
        ? <SquareContainer top={props.top} left={props.left} id="Image">
            <img onClick={props.itemClicked} className="team-logo" src={props.logo}/>
        </SquareContainer>
        : null
)
 export default SmallSquare;