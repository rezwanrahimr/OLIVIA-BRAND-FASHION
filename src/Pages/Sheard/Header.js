import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import CompanyLogo from "../../images/companyLogo.png";
import Loading from "./Loading";
import "./header.css";
import { useState } from "react";
import SearchModal from "./SearchModal/SearchModal";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import OfferHeader from "./OfferHeader/OfferHeader";
import { ProductCartContext } from "../../context/CartContext";
import { HiOutlineUser } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, isLoading, handleSignOut } = useContext(authContext);
  const { cartItems } = useContext(ProductCartContext);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        localStorage.removeItem("accessToken");
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
                <Nav.Link
                  href="/home"
                  className="fw-bold text-black font-monospace"
                >
                  HOME
                </Nav.Link>
              </Link>
              <Link className="text-decoration-none" to="/Collection">
                <Nav.Link
                  href="/Collection"
                  className="fw-bold text-black font-monospace"
                >
                  COLLECTION{" "}
                </Nav.Link>
              </Link>

              <Link className="text-decoration-none" to="/Shop">
                {" "}
                <Nav.Link
                  href="#action2"
                  className="fw-bold text-black font-monospace"
                >
                  SHOP{" "}
                </Nav.Link>
              </Link>
              <Link className="text-decoration-none" to="/About">
                <Nav.Link
                  href="#action2"
                  className="fw-bold text-black font-monospace"
                >
                  ABOUT{" "}
                </Nav.Link>
              </Link>
            </Nav>

            <Nav.Link className="fw-bold text-black" onClick={handleOpenModal}>
              <BsSearch size="24" />
            </Nav.Link>

            <Nav.Link className="fw-bold text-black p-0">
              {" "}
              <div className="dropdown ">
                <span
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiOutlineUser size="24" />
                  {/*  */}
                </span>
                <ul
                  className="dropdown-menu p-2"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {user?.email ? (
                    <>
                      <li>
                        <Link
                          id="dropdownItem"
                          to="/login"
                          onClick={handleLogOut}
                        >
                          Sign out
                        </Link>
                      </li>
                      <li>
                        <Link id="dropdownItem" to="Dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link id="dropdownItem" to="/Dashboard/MyProfile">
                          Profile
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link id="dropdownItem" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Nav.Link>

            <Nav.Link
              className="fw-bold text-black"
              onClick={() => navigate("/productsCart")}
            >
              <span type="" className="position-relative">
                <BiShoppingBag size="24" />
                <span className="position-absolute text-success top-0 start-100 translate-middle badge bg-black text-white rounded-circle">
                  {cartItems?.length}
                </span>
              </span>
            </Nav.Link>
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
