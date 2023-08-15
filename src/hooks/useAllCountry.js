import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const fetchAllCountry = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

export const UseAllCountry = () => {
  const [allCountryList, setAllCountryList] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, pending, resolved, rejected
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus("pending");
    fetchAllCountry()
      .then((data) => {
        setStatus("resolved");
        setAllCountryList(data.slice(0, 24));
      })
      .catch((err) => {
        setError(err);
        setStatus("rejected");
        console.error(err.message);
      });
  }, []);
  return {
    allCountryList,
    isLoading: status === "pending",
    error,
  };
};
