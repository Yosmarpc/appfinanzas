import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Graficos from '../Graficos/Graficos';

const ModalHistorial = (props) => {
  return (<div>

<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Movimiento año  2022
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
            <Graficos />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>);
};

export default ModalHistorial;
