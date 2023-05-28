import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" size={30} color="black" />
      <Text>Search Bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15
  }
});

export default SearchBar;