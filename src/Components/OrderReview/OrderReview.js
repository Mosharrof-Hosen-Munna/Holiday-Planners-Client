import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import bookedImage from "../../images/booked.svg";
import { useHistory, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

const OrderReview = () => {
  const [order, setOrder] = useState({});
  const [ratingErr, setRatingErr] = useState("fadsfasdf");
  const emailRef = useRef();
  const NameRef = useRef();
  const messageRef = useRef();
  const ratingRef = useRef();

  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/booking/order/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleReview = (e) => {
    e.preventDefault();
    if (ratingRef.current.value > 5 || ratingRef.current.value < 1) {
      return setRatingErr("Please choose a number 1 to 5");
    }
    const reviewData = {
      email: emailRef.current.value,
      name: NameRef.current.value,
      rating: ratingRef.current.value,
      message: messageRef.current.value,
      photo: user.photoURL
        ? user.photoURL
        : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
      orderID: id,
      uid: user.uid,
    };

    axios
      .post(`http://localhost:5000/api/review/create`, reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          history.push("/myOrders");
        }
      });
  };

  const emailChange = () => {};

  return (
    <section className="my-5">
      <Container>
        <div className="text-center w-75 mx-auto">
          <img className="w-50" src={bookedImage} alt="" />
          <h2 className="text-orange text-center">
            Your Booking order placed successfully
          </h2>
          <p className="text-secondary text-center">
            Please take ready your money for a amazing journey with us!
          </p>
        </div>
        <h1 className="text-orange">Order Details</h1>

        <Row>
          <Col lg={8} xs={12}>
            <h3 className="my-5">
              Order Status:{" "}
              <span
                className={`p-2 rounded text-white bg-${
                  order.status === "Pending" ? "warning" : "success"
                }`}
              >
                {order.status}
              </span>
            </h3>
            <div className="bg-light d-flex align-items-center justify-content-between border-3 rounded-3 py-5 px-3">
              <h5>
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faClock}
                />
                {order.date}
              </h5>
              <h5>
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faUser}
                />
                15 Age +
              </h5>
              <h5>
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faAddressBook}
                />
                {order.place}
              </h5>
            </div>
            <div>
              <h3 className="text-orange my-4">Our terms and conditions</h3>
              <p className="text-secondary mb-3">
                <b className="text-success">1. YOUR SUBMISSION</b>
                <br />
                <br />
                Anything that you submit to the Site and/or provide to us,
                including but not limited to, questions, reviews, comments, and
                suggestions (collectively, "Submissions") will become our sole
                and exclusive property and shall not be returned to you. In
                addition to the rights applicable to any Submission, when you
                post comments or reviews to the Site, you also grant us the
                right to use the name that you submit, in connection with such
                review, comment, or other content. You shall not use a false
                e-mail address, pretend to be someone other than yourself or
                otherwise mislead us or third parties as to the origin of any
                Submissions. We may, but shall not be obligated to, remove or
                edit any Submissions without any notice or legal course
                applicable to us in this regard.
              </p>
              <p className="text-secondary">
                <b className="text-success">COMMUNICATING WITH US </b>
                <br />
                <br />
                When you visit the Site, or send e-mails to us, you are
                communicating with us electronically. You will be required to
                provide a valid phone number while placing an order with us. We
                may communicate with you by e-mail, SMS, phone call or by
                posting notices on the Site or by any other mode of
                communication we choose to employ. For contractual purposes, you
                consent to receive communications (including transactional,
                promotional and/or commercial messages), from us with respect to
                your use of the website (and/or placement of your order) and
                agree to treat all modes of communication with the same
                importance.
              </p>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <Card className=" mx-auto p-3 w-100 border-0 shadow-lg rounded position-lg-absolute ">
              <h3 className="text-orange text-center mb-4">
                Please give a review
              </h3>
              <p className="text-secondary text-center">Happy Journey</p>
              <Form onSubmit={handleReview}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    value={user.email}
                    placeholder="Email"
                    required
                    onChange={emailChange}
                    disabled={user.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    ref={NameRef}
                    type="text"
                    placeholder="Booking name"
                    value={user.displayName}
                    disabled={user.displayName}
                    onChange={emailChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="number">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="number"
                    ref={ratingRef}
                    placeholder="Enter your rating out of Five"
                    required
                  />
                  <div class="invalid-feedback">{ratingErr}</div>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    ref={messageRef}
                    as="textarea"
                    rows={3}
                    placeholder="write your message"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="success"
                    className="w-100 mx-auto"
                    type="submit"
                  >
                    Submit Review
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

export default OrderReview;
