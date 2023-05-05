import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import {setLoggedIn} from './../store'
import { useNavigate  } from 'react-router-dom';



function LoginForm({ isLoggedIn, setLoggedIn  }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event)=> {
    event.preventDefault();
    //harcoded to allow only this user to be connected he will have the access to the admin panel
    if ((email === 'supermarket@supermarket.com'&& password === 'supermarket')) {
      setLoggedIn (true);
      navigate('/home');

    } else{
      alert ('identifiant invalides');
    }
  }


  const handleLogout = (event)=> {
    event.preventDefault();
    setLoggedIn(false);
    navigate('/home');

      return 
    }
return (
      <Form onSubmit={isLoggedIn ?handleLogout : handleLogin }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
      </Form>
      );
}


function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn //getting value from store
    };
  }

  const mapDispatchToProps = {
    setLoggedIn //dispatch value isloggedin to the store
  };

export default connect (mapStateToProps, mapDispatchToProps) (LoginForm)
