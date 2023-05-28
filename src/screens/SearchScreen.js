import React from "react"
import { Text, View, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
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

  return (
    <View>
      <SearchBar searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} onTermSubmit={searchApi}/>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;