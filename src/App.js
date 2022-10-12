import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import { store } from './store'
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import CreateGameScreen from './screens/CreateGame';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} /> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Game" component={GameScreen} options={{headerShown: false}} />
          <Stack.Screen name="CreateGame" component={CreateGameScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;