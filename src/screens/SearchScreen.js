import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$' || undefined (more dolar signs means more expensive)
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
