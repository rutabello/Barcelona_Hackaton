import React, { useState } from 'react';
import './userprofile.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonUserLogged from '../ButtonUserLogged/ButtonUserLogged'



function UserProfile(props) {
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
      <div>
      {props.userprof.name &&
        <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className='avatar' src={props.userprof.img} />
              <h3 className='textuser'>Name:{props.userprof.name}</h3>
              <p className='textuser'>User Name:{props.userprof.username}</p>
              <p className='textuser'>Score:{props.userprof.points}</p>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            </Modal.Footer>
          </Modal>
          </div>
          }
        </div>


  );
}

export default UserProfile;
