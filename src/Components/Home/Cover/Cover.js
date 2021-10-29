import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import coverImage from "../../../images/cover.jpg";

const Cover = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row lg={2} xs={1} className="g-4">
          <Col>
            <h1 className="text-orange fw-bold" style={{ fontSize: "50px" }}>
              World Best Travel Agency Company Since{" "}
              <span className="text-success">2008.</span>
            </h1>
            <p className="my-5 text-secondary lh-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu
              smod tempor incididunt ut labore eiu dolore magna aliqua.Quis
              ipsum suspen disse ultrices gravida Risus commodo.
            </p>
            <Button variant="success" size="lg" className="w-50">
              Find Now
            </Button>
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
