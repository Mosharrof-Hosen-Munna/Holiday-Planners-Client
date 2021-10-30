import React, { useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Nav,
  Navbar,
  Button,
  ListGroup,
  Card,
} from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
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
                to="/create/destination"
              >
                ADD DESTINATION
              </NavLink>
            </Nav>

            {!user && (
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
              <div className="d-flex ms-auto  align-items-center">
                <div className="position-relative">
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    width="50px"
                    className="rounded-circle cursor-pointer"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    }
                    alt=""
                  />
                  <Card
                    className={`border-0 pt-4 shadow position-absolute ${
                      isOpen ? "d-block" : "d-none"
                    }`}
                    style={{
                      zIndex: "2",
                      width: "280px",
                      right: "0px",
                      top: "60px",
                    }}
                  >
                    <div className="text-center">
                      <img
                        width="50px"
                        className="rounded-circle "
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                        }
                        alt=""
                      />
                    </div>
                    <h6 className="text-center fw-bold text-secondary my-3">
                      {user.displayName}
                    </h6>
                    <ListGroup className="border-0 text-dark" variant="flush">
                      <ListGroup.Item className="p-0 text-dark" role="button">
                        <NavLink
                          exact
                          activeClassName="text-info"
                          className="nav-link  fw-bold ms-0"
                          to="/myOrders"
                        >
                          MY ORDERS
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="p-0 text-dark" role="button">
                        <NavLink
                          exact
                          activeClassName="text-info"
                          className="nav-link ms-0 fw-bold"
                          to="/booking-order/all"
                        >
                          MANAGE ALL ORDERS
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item className="p-2 text-center" role="button">
                        <Button
                          onClick={logOut}
                          variant="danger"
                          className="rounded-pill ms-auto me-2 px-5 fw-bold"
                        >
                          Logout
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
