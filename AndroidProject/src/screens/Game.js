import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//shared preferences / crypted
import stylesGame from '../styles/game';
import Player from '../component/player';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Game = () => {
  return (
    <View style={stylesGame.container}>
      <Player playerId="1" color={stylesGame.firstPart}/>
      <Player playerId="2" color={stylesGame.secondPart}/>
    </View>
  );
};
export default Game;
