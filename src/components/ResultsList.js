import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
