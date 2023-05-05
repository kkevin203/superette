import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { connect } from 'react-redux';





function BarNav({ isLoggedIn }) {
    console.log('nav is logged ' + isLoggedIn)
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to = "/home">
            <Navbar.Brand >Superette</Navbar.Brand>
        </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/administration">
            <Nav.Link disabled={!isLoggedIn}>administration</Nav.Link>
            </LinkContainer>
            <NavDropdown title="connection" id="basic-nav-dropdown">
        <LinkContainer to="/login">
            <NavDropdown.Item>
            Login
            </NavDropdown.Item>
        </LinkContainer>        
            <NavDropdown.Divider />
        <LinkContainer to = "/inscription">
            <NavDropdown.Item>
            register
            </NavDropdown.Item>
        </LinkContainer>
        </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn
    };
  }

 
    export default connect(mapStateToProps)(BarNav);
    
    