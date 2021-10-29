import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

import "./TravelDestinationCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
const TravelDestinationCard = (props) => {
  const {
    _id,
    travelPlace,
    destinationTitle,
    destinationDesc,
    travelDuration,
    groupSize,
    bookingPrice,
    destinationUrl,
    travelTime,
  } = props.destination;
  const history = useHistory();

  const handleBookingButton = () => {
    history.push(`/destination/booking/${_id}`);
  };

  return (
    <Col>
      <Card className="p-0 h-100 border-0 shadow">
        <Card.Img
          style={{ height: "250px" }}
          variant="top"
          className="img-fluid"
          src={destinationUrl}
        />
        <Card.Body className="position-relative">
          <h6 className="travel-destination-name bg-warning text-white fw-bold py-2 px-3 ms-1 rounded">
            {travelPlace}
          </h6>
          <Card.Title className="fs-5 ">{destinationTitle}</Card.Title>
          <Card.Text className="text-secondary">
            {destinationDesc.slice(0, 100)}
          </Card.Text>
          <Row className="mt-auto">
            <hr />
            <Col>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon
                  className="fa-2x text-info me-1"
                  icon={faClock}
                />
                <div>
                  <div>Duration</div>
                  <div className="text-secondary">{travelDuration}</div>
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
                  <div className="text-secondary">{groupSize}Peoples</div>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="text-danger fw-bold">$ {bookingPrice}</h3>
            <Button onClick={handleBookingButton} variant="success">
              BOOK NOW
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TravelDestinationCard;
