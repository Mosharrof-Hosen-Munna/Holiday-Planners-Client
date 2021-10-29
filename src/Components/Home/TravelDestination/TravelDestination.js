import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import travelImage from "../../../images/cover.jpg";
import TravelDestinationCard from "../TravelDestinationCard/TravelDestinationCard";

const TravelDestination = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center">
          <h1>Amazing Tours</h1>
          <p className="text-secondary">
            Trending, Best Selling Tours And Fun Destinations
          </p>
        </div>
        <Row lg={3} md={2} xs={1}>
          <TravelDestinationCard></TravelDestinationCard>
          <TravelDestinationCard></TravelDestinationCard>
          <TravelDestinationCard></TravelDestinationCard>
        </Row>
      </Container>
    </section>
  );
};

export default TravelDestination;
