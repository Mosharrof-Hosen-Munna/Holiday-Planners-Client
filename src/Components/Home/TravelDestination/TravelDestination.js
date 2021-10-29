import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import TravelDestinationCard from "../TravelDestinationCard/TravelDestinationCard";

const TravelDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/travelDestination/all")
      .then((res) => setDestinations(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center">
          <h1 className="text-orange">Amazing Tours</h1>
          <p className="text-secondary w-75 mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </div>
        {destinations && (
          <Row lg={3} md={2} xs={1} className="g-4 py-4">
            {destinations.map((destination) => (
              <TravelDestinationCard
                destination={destination}
              ></TravelDestinationCard>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default TravelDestination;
