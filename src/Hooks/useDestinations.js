import axios from "axios";
import { useEffect, useState } from "react";

const useDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/travelDestination/all")
      .then((res) => {
        setDestinations(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return [destinations, setDestinations, loading];
};

export default useDestinations;
