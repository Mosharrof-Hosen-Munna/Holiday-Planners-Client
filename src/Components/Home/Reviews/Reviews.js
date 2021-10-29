import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  return (
    <section className="py-5 bg-light border-top border-success border-5">
      <Container>
        <div className="text-center">
          <h5 className="text-secondary">REVIEW AND TESTIMONIALS</h5>
          <h1 className="fw-bold">
            <i>Top Reviews for Holiday Planners</i>
          </h1>
        </div>
        <Row lg={3} md={2} xs={1} className="g-4 py-5">
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
