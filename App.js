import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Bussines Search' }} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={{ title: 'Result' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
