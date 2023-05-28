import React from "react"
import { Text, View, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} onTermSubmit={() => searchApi(searchTerm)}/>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;