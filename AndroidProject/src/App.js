import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import PregameScreen from './screens/Pregame';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page'}} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Pregame" component={PregameScreen} options={{ title: 'Pregame Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;