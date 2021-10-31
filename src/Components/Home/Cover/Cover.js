import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import coverImage from "../../../images/cover.jpg";

const Cover = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row lg={2} xs={1} className="g-5">
          <Col>
            <h1 className="text-orange fw-bold" style={{ fontSize: "50px" }}>
              World Best Travel Agency Company Since{" "}
              <span className="text-success">2008.</span>
            </h1>
            <p className="my-5 text-secondary lh-lg">
              Valley of Clouds The trip will start from Dhaka. Breakfast will be
              served at a local restaurant in Khagrachori town. After breakfast,
              our guide will pick you up with a 4x4 Land Cruiser or Chander
              Gari.
            </p>
            <Link to="/destinations/all">
              <Button variant="success" size="lg" className="w-50">
                Find Now
              </Button>
            </Link>
          </Col>
          <Col>
            <div className="shadow rounded-3 ">
              <img src={coverImage} className="img-fluid p-3" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cover;
