import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, Col } from "react-bootstrap";
const ReviewCard = ({ review }) => {
  const rating = parseInt(review.rating);
  return (
    <Col className="mb-5 mb-lg-0">
      <Card className="shadow border-0 h-100 rounded-3">
        <div className="text-center mt-4 mt-lg-5">
          {[...Array(rating).keys()].map((rate) => (
            <FontAwesomeIcon
              className="fa-1x text-warning me-3"
              icon={faStar}
            />
          ))}
        </div>
        <Card.Body className="p-3 p-lg-5 position-relative">
          <Card.Text className="text-center">{review.message}</Card.Text>
          <div className="text-center">
            <h5 className="fw-bold text-orange">{review.name}</h5>
            <h6 className="mb-5">Traveller</h6>
            <img
              style={{
                bottom: "-45px",
                left: "38%",
              }}
              className="rounded-circle shadow bg-light border-success border-5 border img-fluid w-25 position-absolute"
              src={review.photo}
              alt=""
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewCard;
