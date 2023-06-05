import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CompanyLogo from "../../images/companyLogo.png";
import Loading from "./Loading";
import "./header.css";
import { useState } from "react";
import SearchModal from "./SearchModal/SearchModal";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import OfferHeader from "./OfferHeader/OfferHeader";
import { ProductCartContext } from "../../context/CartContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, isLoading, handleSignOut } = useContext(authContext);
  const { cartItems } = useContext(ProductCartContext);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        localStorage.removeItem("tokne");
      })
      .catch((error) => {});
  };

  // Modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="fixed-top">
      <OfferHeader></OfferHeader>
      <Navbar
        //
        className="shadow-none bg-body rounded px-3 "
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
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </Nav.Link>

            <div className="dropdown">
              <span
                className=" dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-regular fa-user fa-lg"></i>
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {user?.email ? (
                  <>
                    <li>
                      <Link to="/login" onClick={handleLogOut}>
                        Sign out
                      </Link>
                    </li>
                    <li>
                      <Link to="Dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/Dashboard/MyProfile">Profile</Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
            <Link className="text-decoration-none" to="/productsCart">
              <span type="" className="position-relative">
                <i className="fa-solid fa-bag-shopping fa-lg "></i>
                <span className="position-absolute text-success top-0 start-100 translate-middle badge ">
                  {cartItems?.length}
                </span>
              </span>
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
