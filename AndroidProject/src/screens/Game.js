import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//shared preferences / crypted
import stylesGame from '../styles/game';
import Player from '../component/player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Game = async () => {

  return (
    <View style={stylesGame.container}>
      <Player
        player= '1'
      />
      <Player player="2" />
    </View>
  );
};
export default Game;
