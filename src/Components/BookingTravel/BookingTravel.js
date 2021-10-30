import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Reviews from "../Home/Reviews/Reviews";
import BookingBanner from "./BookingBanner/BookingBanner";
import BookingDetails from "./BookingDetails/BookingDetails";
import BookingForm from "./BookingForm/BookingForm";

const BookingTravel = () => {
  const [destination, setDestination] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/travelDestination/${id}`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <section>
      {destination && (
        <div>
          <BookingBanner
            img={destination.destinationUrl}
            price={destination.bookingPrice}
            title={destination.destinationTitle}
          ></BookingBanner>
          <Container>
            <Row className="g-4">
              <Col lg={8} xs={12}>
                <BookingDetails destination={destination}></BookingDetails>
              </Col>
              <Col lg={4} xs={12}>
                <BookingForm destination={destination}></BookingForm>
              </Col>
            </Row>
          </Container>
          <Reviews></Reviews>
        </div>
      )}
    </section>
  );
};

export default BookingTravel;

const BookingData = {
  // name: "munna",
  // email: "mdsaf@gmail.com",
  // phone: "164631121",
  // paymentMethod: "Cash On Delivery",
  // message: "sadfasdfasdf",
  // status: 'pending'
  // author: {
  //   uid:user.uid,
  //   name: user.displayName,
  //   email: user.email ? user.email : "Not/Available",
  //   photoUrl: user.photoURL
  //     ? user.photoURL
  //     : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
  // },
};
