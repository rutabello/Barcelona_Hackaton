import React from 'react';
const ButtonUserLogged =(props)=>{
    return(
        <div>
            <button onClick={props.userHere}>
                User Logged In
            </button>
            
        </div>
    )

}

export default ButtonUserLogged;