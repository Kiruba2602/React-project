//Header.jsx
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header(){
  return (
    <Navbar bg="secondary-subtle" variant="dark">
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand class="fs-1">To Do List</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;