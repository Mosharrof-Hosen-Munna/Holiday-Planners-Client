import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/account/login");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <img className="img-fluid" src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" fw-bold">
              <NavLink
                exact
                activeClassName="text-info"
                className="nav-link"
                to="/home"
              >
                HOME
              </NavLink>
              <NavLink
                exact
                activeClassName="text-info"
                className="nav-link"
                to="/about"
              >
                ABOUT US
              </NavLink>
              <NavLink
                exact
                activeClassName="text-info"
                className="nav-link"
                to="/services"
              >
                SERVICES
              </NavLink>
              <NavLink
                exact
                activeClassName="text-info"
                className="nav-link"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </Nav>

            {user ? (
              <Button
                onClick={logOut}
                variant="danger"
                className="rounded-pill ms-auto me-2 px-5 fw-bold"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLoginClick}
                variant="primary"
                className="rounded-pill ms-auto px-5 fw-bold"
              >
                <FontAwesomeIcon
                  className="fa-1x me-3 text-white"
                  icon={faLock}
                />
                Log In
              </Button>
            )}
            {user && (
              <div className="d-flex  align-items-center">
                <h5 className="fw-bold text-secondary me-3">
                  {user.displayName}
                </h5>
                <img
                  width="50px"
                  className="rounded-circle"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  }
                  alt=""
                />
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
