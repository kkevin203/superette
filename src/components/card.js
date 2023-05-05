import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';
import QtyPopUp from './QtyPopUp';
import { useNavigate  } from 'react-router-dom';


function CarComponent(props) {
  const [showPopUp, setShowPopUp] = useState(false); // initialise l'état "showPopUp" à "false"
  const [qty, setQty] = useState(props.qty);
  const navigate = useNavigate();

  const handleAddToCart = (qtyToAdd) => {
    console.log(`Ajouter ${qty} au panier`); // exemple de fonction pour ajouter la quantité au panier
    let newQty = parseInt(qty) +  parseInt(qtyToAdd);
    setQty(newQty); 
  };
  
  const handleAddQty = () => {
    setShowPopUp(true); // ouvrir la pop-up
  };
  const handleAdmin = () => {
    navigate('/Administration')
  };
  
  const handlePopUpClose = () => {
    setShowPopUp(false); // fermer la pop-up
  };

  const handleRemoveQty = () => 
  {
    setQty(0); 
  };

  return (
    <Card style={{ width: '18rem', margin:'10px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.description}</ListGroup.Item>
        <ListGroup.Item>{qty}</ListGroup.Item>
        <ListGroup.Item>{props.prix}</ListGroup.Item>
      </ListGroup>
      {/* if we are on the admin panel we accept to manage the qty of each product */}
      {
        props.isAdminPanel ? (
        <div>
      <Card.Body>        
      <Card.Link onClick={handleAddQty}>Ajouter quantité</Card.Link> {/* ouvrir la pop-up */}
            {showPopUp && <QtyPopUp show={showPopUp} handleClose={handlePopUpClose} handleAddToCart={handleAddToCart} />}
          <Card.Link onClick={handleRemoveQty}>retirer</Card.Link>

      </Card.Body>  
          </div>
      ) :  props.isLoggedIn ?
      // if we are logged we can propose to move on the panel admin to manage qty
    <Card.Body>
      <Card.Link onClick={handleAdmin}>
        accéder au panel administration pour ajouter des quantités
      </Card.Link>
    </Card.Body> :null
  }
    </Card>
  );
}

export default CarComponent;
