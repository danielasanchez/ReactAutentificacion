import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Proteger from '../Sesion/Proteger';
import { Button } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { ApiContext } from "../Context/ApiContext";


const NavBar = () => {
  const { createUser, user, logout, signIn } = useContext(ApiContext);
  return (
 
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/inicio">Buscar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/informacion">Informacion</Nav.Link>
          <Nav.Link href="/contacto">contacto</Nav.Link>
          <Nav.Link href="/cuenta">cuenta</Nav.Link>
          <Button onClick={logout}>Cerrar</Button>
        </Nav>
        
      </Container>
    </Navbar>

 

  );
}

export default NavBar;