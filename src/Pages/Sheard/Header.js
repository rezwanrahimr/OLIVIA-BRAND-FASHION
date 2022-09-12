import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import CompanyLogo from '../../images/companyLogo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import Loading from './Loading';
import header from './header.css';


const Header = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accesToken')
    

  };
  return (
    <div className='' style={{ marginTop: 75 }}>
      <Navbar className='shadow-none bg-body rounded px-3 fixed-top' bg="white" expand="lg" variant="white">
        <Container fluid>
          <Navbar.Brand href="#"><img className='' src={CompanyLogo} alt="" width='100px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='text-decoration-none' to="/home"><Nav.Link href="/home" className='fw-bold text-black'>HOME</Nav.Link></Link>
              <Link className='text-decoration-none' to="/Collection"><Nav.Link href="/Collection" className='fw-bold text-black'>COLLECTION </Nav.Link></Link>
              
              <Link className='text-decoration-none' to="/Shop"> <Nav.Link href="#action2" className='fw-bold text-black'>SHOP </Nav.Link></Link>
              <Link className='text-decoration-none' to="/About"><Nav.Link href="#action2" className='fw-bold text-black'>ABOUT </Nav.Link></Link>
              
              <NavDropdown
                id="nav-dropdown-white-example"
                title="PAGES"
                menuVariant="white"
                className='fw-bold text-black'
              >
                 <Link className='text-decoration-none' to="/About"><NavDropdown.Item href="/Login">About Us</NavDropdown.Item></Link>

                 <Link className='text-decoration-none' to="/About"><NavDropdown.Item href="/Login">Contact Us</NavDropdown.Item></Link>

                 <Link className='text-decoration-none mt-2' to="/About"><NavDropdown.Item href="/Login">FAQs</NavDropdown.Item></Link>
               
                 <Link className='text-decoration-none mt-2' to="/About"><NavDropdown.Item href="/Login">Coming Soon</NavDropdown.Item></Link>
               

              </NavDropdown>
             {user && <Link to='/Dashboard'> <Nav.Link href="/Dashboard" className='fw-bold text-black'>DASHBOARD</Nav.Link></Link>}
              <NavDropdown
                id="nav-dropdown-white-example"
                title="USER"
                menuVariant="white"
                className='fw-bold text-black'
              >
                {
                  user? <Link className='text-decoration-none' to="/Login"><NavDropdown.Item href="/Login"><button className='border-0 bg-white' onClick={()=>logout()}>SIGN-OUT</button></NavDropdown.Item></Link> : <Link className='text-decoration-none' to="/Login"><NavDropdown.Item href="/Login">LOGIN</NavDropdown.Item></Link>
                }
               {
                 user?'': <Link className='text-decoration-none' to="/SignUp"><NavDropdown.Item href="/SignUp">REGISTER</NavDropdown.Item></Link>
               }

              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 text-dark"
                aria-label="Search"
              />
              <Button variant="btn ">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;