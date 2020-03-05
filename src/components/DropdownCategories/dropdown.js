
import React , { Component } from 'react';
import './dropdown.css';
import Dropdown from 'react-bootstrap/Dropdown'


class DropdownCategories extends Component {

  render() {
    return (

      <div className="dropdownCategories">
        <div className="container-fluid">
          <div className="row">
            <div className="col no-pad">
              <Dropdown>
               <Dropdown.Toggle className="toggle" id="dropdown-custom-components">
                 Juegos
               </Dropdown.Toggle>

               <Dropdown.Menu className="dropdownContent">
                 <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                 <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                 <Dropdown.Item eventKey="3" active>
                   Orange
                 </Dropdown.Item>
                 <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>,
          </div>
        </div>
      </div>
    </div>

    )
  }
}

export default DropdownCategories
