import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import { store } from './store'
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import PregameScreen from './screens/Pregame';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Game" component={GameScreen} options={{headerShown: false}} />
          <Stack.Screen name="Pregame" component={PregameScreen} options={{ title: 'Pregame Page' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;