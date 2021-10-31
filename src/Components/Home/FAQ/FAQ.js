import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const FAQ = () => {
  const { user } = useAuth();
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          <Col lg={8} xs={12}>
            <h6>CHOOSE YOUR PLACE</h6>
            <h1 className="text-orange fw-bold">
              Frequently Asked <br /> Question
            </h1>
            <Accordion defaultActiveKey="0" className="mt-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Do your tours include international airfare?
                </Accordion.Header>
                <Accordion.Body>
                  Trip specific information on transportation can be found on
                  the trip summary page however in most cases we use public
                  transportation. We’ve found that how you get there
                  significantly influences the tone of your journey and public
                  transportation allows face-to-face interaction with the local
                  people. Some of our adventures, including our “Superior”,
                  “Comfort Class” and most adventures in Africa, use private
                  transportation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  What type of ground transportation is used on your tours?
                </Accordion.Header>
                <Accordion.Body>
                  Trip specific information on transportation can be found on
                  the trip summary page however in most cases we use public
                  transportation. We’ve found that how you get there
                  significantly influences the tone of your journey and public
                  transportation allows face-to-face interaction with the local
                  people. Some of our adventures, including our “Superior”,
                  “Comfort Class” and most adventures in Africa, use private
                  transportation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Which payment methods are acceptable?
                </Accordion.Header>
                <Accordion.Body>
                  Trip specific information on transportation can be found on
                  the trip summary page however in most cases we use public
                  transportation. We’ve found that how you get there
                  significantly influences the tone of your journey and public
                  transportation allows face-to-face interaction with the local
                  people. Some of our adventures, including our “Superior”,
                  “Comfort Class” and most adventures in Africa, use private
                  transportation.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={4} xs={12}>
            <Card className=" mx-auto p-3 w-100 border-0 shadow-lg rounded ">
              <h3 className="text-orange text-center mb-4">
                Ask Your Questions
              </h3>
              <p className="text-secondary text-center">Happy Journey</p>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={user ? user.email : ""}
                    placeholder="Email"
                    required
                    disabled={user?.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="name" required />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Question *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="write your question"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="success"
                    className="w-100 mx-auto"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
