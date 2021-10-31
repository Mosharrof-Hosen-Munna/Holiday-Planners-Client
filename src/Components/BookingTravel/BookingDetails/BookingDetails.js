import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
const BookingDetails = (props) => {
  const { travelPlace, destinationDesc, travelDuration } = props.destination;
  return (
    <div className="py-5">
      <h1 className="text-orange mb-5">Overview</h1>
      <p className="fw-bolder fs-5">{destinationDesc.slice(0, 500)}</p>
      <br />
      <p className="text-secondary">{destinationDesc.slice(500, 1400)}</p>
      <div className="bg-light d-flex align-items-center justify-content-between border-3 rounded-3 py-5 px-3">
        <h5>
          <FontAwesomeIcon className="fa-1x text-info me-3" icon={faClock} />
          {travelDuration}
        </h5>
        <h5>
          <FontAwesomeIcon className="fa-1x text-info me-3" icon={faUser} />
          15 Age +
        </h5>
        <h5>
          <FontAwesomeIcon
            className="fa-1x text-info me-3"
            icon={faAddressBook}
          />
          {travelPlace}
        </h5>
      </div>
      <br />
      <p className="fw-bold">
        {destinationDesc.slice(1400, destinationDesc.length)}
      </p>
    </div>
  );
};

export default BookingDetails;
