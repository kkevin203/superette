import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Boutique from './Boutique';
import Button from 'react-bootstrap/Button';


 

function Home ({ isLoggedIn }) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/Login'; 
    navigate(path);
  }
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          {/* Afficher le contenu du store */}
          <h1>Bienvenue sur le store !</h1>
          
        </div>
      ) : (
        <div>
          {/* Rediriger vers la page de connexion */}
          <h1>Connectez-vous pour accéder au store</h1>
          <Button variant="warning" onClick={routeChange}>Se connecter</Button>
        </div>
      )}
      <Boutique isAdminPanel={false}/>
    </div>
  );
  }

  function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn,
    };
  }

export default connect(mapStateToProps)(Home)