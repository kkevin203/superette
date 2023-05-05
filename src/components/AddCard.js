import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//popup to add a new card
function AddCardModal(props) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState(1);

  //manage url img
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  //manage title
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //manage qty
  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  //manage descrption
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //adding the new card with the new data
    const newCard = { image, title, description, qty };
    props.handleAddCard(newCard);
    setImage('');
    setTitle('');
    setDescription('');
    setQty(1);
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle carte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Entrez l'URL de l'image" value={image} onChange={handleImageChange} />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Titre</Form.Label>
            <Form.Control type="text" placeholder="Entrez le titre" value={title} onChange={handleTitleChange} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Entrez la description" value={description} onChange={handleDescriptionChange} />
          </Form.Group>
          <Form.Group controlId="formQty">
            <Form.Label>Quantité</Form.Label>
            <Form.Control type="text" placeholder="Entrez la quantité" value={qty} onChange={handleQtyChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCardModal;
