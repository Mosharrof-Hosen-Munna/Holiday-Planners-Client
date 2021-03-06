import { Container, Row } from "react-bootstrap";
import useDestinations from "../../../Hooks/useDestinations";
import DestinationSkeleton from "../DestinationSkeleton/DestinationSkeleton";

import TravelDestinationCard from "../TravelDestinationCard/TravelDestinationCard";

const TravelDestination = () => {
  const [destinations, setDestinations, loading] = useDestinations();
  if (loading) {
    return (
      <>
        <div className="text-center py-5">
          <h1 className="text-orange">Amazing Tours</h1>
          <p className="text-secondary w-75 mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </div>
        <DestinationSkeleton></DestinationSkeleton>
      </>
    );
  }
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
            {destinations.slice(0, 6).map((destination) => (
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
