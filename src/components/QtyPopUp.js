import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//using to add qty for each product card
function QtyPopUp(props) {
  const [qty, setQty] = useState(1); // default value is 1
  
  const handleQtyChange = (event) => {
    setQty(event.target.value); //updating quantity
  };
  
  const handleAddToCart = () => {
    props.handleAddToCart(qty); //updating qty to the parent then close the pop up
    props.handleClose(); 
  };
  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter le stock que vous venez de recevoir pour ce produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="qty">
            <Form.Label>Quantité</Form.Label>
            <Form.Control type="number" value={qty} onChange={handleQtyChange} min="1" max="10" /> {/* limité à 10 max */}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QtyPopUp;
