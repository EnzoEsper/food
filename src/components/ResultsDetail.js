import { StyleSheet, Text, View } from 'react-native';

function ResultsDetail({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultsDetail;
