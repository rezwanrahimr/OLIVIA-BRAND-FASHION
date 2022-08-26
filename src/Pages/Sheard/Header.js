import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CompanyLogo from '../../images/companyLogo.png';

const Header = () => {
  return (
      <div>
        <Navbar className='shadow-lg bg-body rounded px-3' bg="white" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img className='' src={CompanyLogo} alt="" width='100px' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/home" className='fw-bold text-black'>HOME</Nav.Link>
                <Nav.Link href="#action2" className='fw-bold text-black'>COLLECTION </Nav.Link>
                <Nav.Link href="#action2" className='fw-bold text-black'>SHOP </Nav.Link>
                <Nav.Link href="#action2" className='fw-bold text-black'>ABOUT </Nav.Link>
                <Nav.Link href="#action2" className='fw-bold text-black'>PAGES </Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 text-dark"
                  aria-label="Search"
                />
                <Button variant="btn btn-outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
};

export default Header;