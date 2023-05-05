import React, { useState }  from 'react'
import Card from './../components/card.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import AddCardModal from './../components/AddCard.js';
import Button from 'react-bootstrap/Button';



function Boutique ({isLoggedIn,isAdminPanel}) {
   const objects = []; //genère au max 10 produits et minimum 1
  for (let i = 0; i < Math.floor(Math.random() * (10 )) + 1; i++)
  {
        const title = "Title " + i;
        const img = "https://picsum.photos/" + i + 2; //random url img
        const price = Math.floor(Math.random() * (50 )) + 1 + " €"; //génère un prix entre 50 et 1 €
        const description = "description for the " + title + " lorem ipsum";
        const qty = Math.floor(Math.random() * (50 ));
        objects.push({title, img, price, description, qty});
  }

  //intializing model...
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [cards, setCards] = useState(objects);

  //adding new card
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  //to open pop up add card
  const handleShowAddCardModal = () => {
    setShowAddCardModal(true);
  };

  //close pop up add card
  const handleCloseAddCardModal = () => {
    setShowAddCardModal(false);
  };

    return (
        <>
      <h1>Boutique</h1>      
      {//if im logged i can add a new card
        isLoggedIn ? <div>
      <Button variant="success" onClick={handleShowAddCardModal}>Add Card</Button>
      {showAddCardModal && <AddCardModal show={showAddCardModal} handleClose={handleCloseAddCardModal} handleAddCard={handleAddCard} />}
      </div>
      : null
      }
      <Container>
        <Row>
          {
            cards.map((object, index) =>(
            <Card title = {object.title}
            img = {object.img}
            description = {object.description}
            prix = {object.price}
            qty = {object.qty}
            isLoggedIn = {isLoggedIn}
            isAdminPanel ={isAdminPanel}
            />

                        ))
          }
        </Row>
      </Container>
      

        </>
    )
  }

  function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn //getting data from store
    };
  }
  export default connect (mapStateToProps) (Boutique)


