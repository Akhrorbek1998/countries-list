import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const fetchCountry = async (name) => {
  const response = await fetch(`${BASE_URL}/region/${name}`);
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

export const useRegionCountry = (name) => {
  const [regionCountryList, setRegionCountryList] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, pending, resolved, rejected
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;
    setStatus("pending");
    fetchCountry(name)
      .then((data) => {
        setStatus("resolved");
        setRegionCountryList(data.slice(0, 24));
      })
      .catch((err) => {
        setError(err);
        setStatus("rejected");
        console.error(err);
      });
  }, [name]);
  return {
    regionCountryList,
    isLoading: status === "pending",
    isError: status === "rejected",
    error,
  };
};
