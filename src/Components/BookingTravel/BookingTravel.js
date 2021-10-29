import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

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
      <Container>
        {destination && <div>{destination.destinationDesc}</div>}
      </Container>
    </section>
  );
};

export default BookingTravel;
