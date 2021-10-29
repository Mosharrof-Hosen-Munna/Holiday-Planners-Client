import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../images/logo.png";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row lg={3}>
          <Col className="rounded">
            <div className="bg-white rounded-3 p-2">
              <img className="img-fluid" src={logo} alt="" />
            </div>
            <p className="text-secondary my-4 text-align-justify">
              Featuring a garden with BBQ facilities and free Wi-Fi access
              available throughout, Apartments Okuka offers self-catering
              apartments 5 km from Tivat.
            </p>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100028489011065"
              >
                <FontAwesomeIcon
                  className="fa-2x me-3 text-primary"
                  icon={faFacebook}
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100028489011065"
              >
                <FontAwesomeIcon
                  className="fa-2x me-3 text-success"
                  icon={faTwitter}
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100028489011065"
              >
                <FontAwesomeIcon
                  className="fa-2x me-3 text-danger"
                  icon={faYoutube}
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100028489011065"
              >
                <FontAwesomeIcon
                  className="fa-2x  text-info"
                  icon={faInstagram}
                />
              </a>
            </div>
          </Col>
          <Col className="text-white">
            <h5 className="text-orange">Travel Destinations</h5>
            <div className="ms-3">
              <p>United</p>
              <p>Arab</p>
              <p>Emirates</p>
              <p>United</p>
              <p>Kingdom</p>
              <p>Australia</p>
            </div>
          </Col>
          <Col>
            <h5 className="text-white">Booking Now!</h5>
            <hr className="w-50 text-primary p-1" />
            <div className="bg-white rounded py-3 px-2  d-flex align-items-center">
              <FontAwesomeIcon
                className="fa-2x text-dark me-3"
                icon={faPhoneSquareAlt}
              />
              <div>
                <h6>Call Us </h6>
                <h6>(+021) 2336 278</h6>
              </div>
            </div>
            <p className="text-secondary mt-4">
              Featuring a garden with BBQ facilities and free Wi-Fi access
              available throughout, Apartments Okuka offers self-catering
              apartments 5 km from Tivat.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
