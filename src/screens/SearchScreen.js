import React from "react"
import { Text, View, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [results, setResults] = React.useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      })
      console.log("Api response", response.data);
      setResults(response.data.businesses)
    } catch (error) {
      console.log("SearApi error", error);
    }
  }

  return (
    <View>
      <SearchBar searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} onTermSubmit={searchApi}/>
      <Text>Search Screen {searchTerm}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;