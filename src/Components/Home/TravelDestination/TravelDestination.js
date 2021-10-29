import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import travelImage from "../../../images/cover.jpg";

const TravelDestination = () => {
  return (
    <section className="py-5">
      <Container>
        <Row lg={3} md={2} xs={1}>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={travelImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default TravelDestination;
