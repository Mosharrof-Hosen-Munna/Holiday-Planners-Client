import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

import ReviewCard from "./ReviewCard";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://aqueous-fortress-86306.herokuapp.com/api/review/all")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard review={review}></ReviewCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
