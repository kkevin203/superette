import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Boutique from './Boutique';

 
//admin panel to manage the new product
function Administration ({ isLoggedIn }) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/Login'; 
    navigate(path);
  }
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          {/* display the sore */}
          <h1>Bienvenue sur le panneau d'administration !</h1>
          <Boutique isAdminPanel={true}/>
          
        </div>
      ) : (
        <div>
          {/* redirect to login page*/}
          <h2>Connectez-vous pour accéder au panneau d'administration</h2>
          <Button variant="danger" onClick={routeChange}>Se connecter</Button>
        </div>
      )}
      
    </div>

  );
  }

  function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn // getting data from store
    };
  }

export default connect(mapStateToProps)(Administration)
    
