import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import travelImage from "../../../images/cover.jpg";
import "./TravelDestinationCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
const TravelDestinationCard = () => {
  return (
    <Col>
      <Card className="p-0 border-0 shadow">
        <Card.Img variant="top" className="img-fluid" src={travelImage} />
        <Card.Body className="position-relative">
          <h6 className="travel-destination-name bg-warning text-white fw-bold py-2 px-3 ms-1 rounded">
            America
          </h6>
          <Card.Title className="fs-5 ">
            Holiday Planners is a World Leading Online Tour Booking Platform
          </Card.Title>
          <Card.Text className="text-secondary">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <hr />
          <Row>
            <Col>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon
                  className="fa-2x text-info me-1"
                  icon={faClock}
                />
                <div>
                  <div>Duration</div>
                  <div className="text-secondary">9 Days 10 hours</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon
                  className="fa-2x text-info me-1"
                  icon={faUsers}
                />
                <div>
                  <div>Group Size</div>
                  <div className="text-secondary">10 Peoples</div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="text-danger fw-bold">$525</h3>
            <Button variant="success">BOOK NOW</Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TravelDestinationCard;
