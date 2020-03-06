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
        <Button bsPrefix="buttonModal" onClick={handleShow}>
          Mi Perfil
        </Button>

        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header>
              <Modal.Title className="titleProfile">Mi Perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="centerDiv">
                <img className='avatar mt-3' src={props.userprof.img} />
                <h3 className='textuser mt-3'>Nombre: {props.userprof.name}</h3>
                <p className='textuser'>Nombre de Usuario: {props.userprof.username}</p>
                <p className='textuser'>Puntuación: {props.userprof.points}</p>
              </div>

            </Modal.Body>
            <Modal.Footer>
            <Button className="buttonCloseModal" onClick={handleClose}>
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
