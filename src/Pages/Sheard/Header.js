import React from "react";
import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import CompanyLogo from "../../images/companyLogo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "./Loading";
import header from "./header.css";
import { useState } from "react";
import SearchModal from "./SearchModal/SearchModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accesToken");
  };
  // Modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="" style={{ marginTop: 75 }}>
      <Navbar
        className="shadow-none bg-body rounded px-3 fixed-top"
        bg="white"
        expand="lg"
        variant="white"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="" src={CompanyLogo} alt="" width="100px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-decoration-none" to="/home">
                <Nav.Link href="/home" className="fw-bold text-black">
                  HOME
                </Nav.Link>
              </Link>
              <Link className="text-decoration-none" to="/Collection">
                <Nav.Link href="/Collection" className="fw-bold text-black">
                  COLLECTION{" "}
                </Nav.Link>
              </Link>

              <Link className="text-decoration-none" to="/Shop">
                {" "}
                <Nav.Link href="#action2" className="fw-bold text-black">
                  SHOP{" "}
                </Nav.Link>
              </Link>
              <Link className="text-decoration-none" to="/About">
                <Nav.Link href="#action2" className="fw-bold text-black">
                  ABOUT{" "}
                </Nav.Link>
              </Link>
            </Nav>

            <Nav.Link className="fw-bold text-black" onClick={handleOpenModal}>
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </Nav.Link>

            <Link className="text-decoration-none" to="/About">
              <Nav.Link href="#action2" className="fw-bold text-black">
                <i class="fa-regular fa-user fa-lg"></i>
              </Nav.Link>
            </Link>
            <Link className="text-decoration-none" to="/About">
              <Nav.Link href="#action2" className="fw-bold text-black">
                <span type="" class="position-relative">
                  <i class="fa-solid fa-bag-shopping fa-lg "></i>
                  <span class="position-absolute text-success top-0 start-100 translate-middle badge ">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </span>
              </Nav.Link>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchModal
        showModal={showModal}
        setShowModal={setShowModal}
      ></SearchModal>
    </div>
  );
};

export default Header;
