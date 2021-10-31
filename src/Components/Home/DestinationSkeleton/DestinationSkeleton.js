import React from "react";
import { Container, Row } from "react-bootstrap";
import "./DestinationSkeleton.css";

const DestinationCard = () => {
  return (
    <div className="col">
      <div className="card border-0 shadow">
        <div className=" skeleton-box overflow-hidden skeleton-card-img w-100 p-0"></div>
        <div className="card-body">
          <div className="skeleton-box skeleton-circle-100 p-3 my-1"></div>
          <div className="skeleton-box skeleton-circle-50 p-15 mb-3  "></div>
          <div className="skeleton-box skeleton-circle-100 p-10   "></div>
          <div className="skeleton-box skeleton-circle-100 p-2   "></div>
          <div className="skeleton-box skeleton-circle-75 p-2   "></div>
        </div>
      </div>
    </div>
  );
};

const DestinationSkeleton = () => {
  return (
    <div className="pb-5">
      <Container>
        <Row lg={3} xs={1} className="g-4">
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
          <DestinationCard></DestinationCard>
        </Row>
      </Container>
    </div>
  );
};

export default DestinationSkeleton;
