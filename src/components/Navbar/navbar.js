
import React , { Component } from 'react';
import './navbar.css';


class Navbar extends Component {


  render() {

    return (
      <div className="header-profile">
        <div className="header-profile__wrapper">
          <div className="row">
          <span className="icon-home-link linkable" data-href-id="header-logo-url" data-href="https://www.lavanguardia.com">
            <a className="header-profile__logo" href="https://www.lavanguardia.com"><img className="imageHome" src="https://arenacloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arena-headers/assets/img/lavanguardia/house.png"></img></a>
            </span>
            <a className="header-profile__logo" href="https://www.lavanguardia.com">
              <figure className="header-profile__figure" alt="La Vanguardia">
                <img src="https://rsc.lavanguardia.com/img/logo-image-v1000486.svg" className="img-responsive" alt="La Vanguardia" rel="logo"></img>
        </figure>
      </a>
    </div>
  </div>
</div>

)
}
}

export default Navbar
