import axios from "axios";
import React, { useRef } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const AddDestination = () => {
  const placeAddressRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imgUrlRef = useRef();
  const durationRef = useRef();
  const groupSizeRef = useRef();
  const travelPriceRef = useRef();
  const startingTimeRef = useRef();

  const { user } = useAuth();

  const handleAddDestination = (e) => {
    e.preventDefault();
    const newDestination = {
      travelPlace: placeAddressRef.current.value,
      destinationTitle: titleRef.current.value,
      destinationDesc: descriptionRef.current.value,
      travelDuration: durationRef.current.value,
      groupSize: groupSizeRef.current.value,
      bookingPrice: travelPriceRef.current.value,
      destinationUrl: imgUrlRef.current.value,
      travelTime: startingTimeRef.current.value,
      author: {
        name: user.displayName,
        email: user.email ? user.email : "Not/Available",
        photoUrl: user.photoURL
          ? user.photoURL
          : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
      },
    };

    axios
      .post("http://localhost:5000/create/travelDestinations", newDestination)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added a new destination");
          e.target.reset();
        }
      });
  };

  return (
    <section className="my-5">
      <Container>
        <Card className="w-lg-50 mx-auto w-sm-100 p-3 border-0 shadow-lg rounded">
          <h2 className="text-orange text-center mb-4">
            Add a new travel Destination
          </h2>
          <p className="text-secondary text-center">Happy Journey</p>
          <Form onSubmit={handleAddDestination}>
            <Form.Group className="mb-3" controlId="formBasicPlace">
              <Form.Label>Travel Place Address</Form.Label>
              <Form.Control
                type="text"
                ref={placeAddressRef}
                placeholder="Travel Place Address"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Travel Title</Form.Label>
              <Form.Control
                ref={titleRef}
                type="text"
                placeholder="Travel Title"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Travel Descriptions</Form.Label>
              <Form.Control
                ref={descriptionRef}
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage Url">
              <Form.Label>Travel Image Url</Form.Label>
              <Form.Control
                type="text"
                ref={imgUrlRef}
                placeholder="Travel Image Url"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="duration">
              <Form.Label>Travel Duration</Form.Label>
              <Form.Control
                type="text"
                ref={durationRef}
                placeholder="Travel Duration"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
              <Form.Label>Travel Group Size</Form.Label>
              <Form.Control
                type="number"
                ref={groupSizeRef}
                placeholder="Travel Group Size"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Travel Booking Price $</Form.Label>
              <Form.Control
                type="number"
                ref={travelPriceRef}
                placeholder="Travel Booking Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="time">
              <Form.Label>Travel Starting Time</Form.Label>
              <Form.Control
                type="date"
                ref={startingTimeRef}
                placeholder="Travel Starting Time"
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" className="w-50 mx-auto" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default AddDestination;
