import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      console.log("searchApi error", error);
      setErrorMessage("Something went wrong :(");
    }
  }

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
}