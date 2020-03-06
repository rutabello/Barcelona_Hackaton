import React from 'react';
import './userprofile.css'

function UserProfile(props) {
  return (
    <div className='boxflex'>
      
      {props.userprof.name && 
      <div className="userprofile">
        <img className='avatar' src={props.userprof.img} />
        <h3 className='textuser'>Name:{props.userprof.name}</h3>
        <p className='textuser'>E-mail:{props.userprof.mail}</p>
        <p className='textuser'>Points:{props.userprof.points}</p>
        </div>
        }
    </div>
  );
}

export default UserProfile;
