import React from "react";
import { Container } from "react-bootstrap";

const BookingBanner = (props) => {
  return (
    <div className="w-100 position-relative">
      <img
        style={{ height: "500px" }}
        src={props.img}
        className="w-100 object-cover"
        alt=""
      />
      <div
        className="position-absolute text-white p-5 w-100"
        style={{
          bottom: "0px",
          background: "linear-gradient(transparent,black)",
        }}
      >
        <Container>
          <h1>{props.title}</h1>
          <p>
            <span className="fs-3 fw-bold text-orange">$ {props.price}</span> /
            Per Person
          </p>
        </Container>
      </div>
    </div>
  );
};

export default BookingBanner;
