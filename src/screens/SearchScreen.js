import React from "react"
import { Text, View, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <View>
      <SearchBar searchTerm={searchTerm} onChangeSearchTerm={(newTerm) => setSearchTerm(newTerm)} onTermSubmit={() => console.log("term was submitted")}/>
      <Text>Search Screen {searchTerm}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default SearchScreen;