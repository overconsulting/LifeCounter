import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import stylesGame from '../styles/game';

const Game = ({navigation}) => {
  return (
    <View style={stylesGame.container}>
      <View style={stylesGame.firstPart}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Game')}
          style={stylesGame.gameBtn1}>
          <Text style={stylesGame.text}> Game screen </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesGame.secondPart}>
        <View style={stylesGame.secondPart}>
          <TouchableOpacity style={stylesGame.gameBtn2}>
            <Image
              source={require('../img/814208.png')}
              style={stylesGame.image}
            />
            <Text style={stylesGame.text}> Game screen </Text>
          </TouchableOpacity>
        </View>
        <View style={stylesGame.secondPart}>
          <Text style={stylesGame.player1}>Player 1</Text>
        </View>
        <View style={stylesGame.secondPart}>
          <TouchableOpacity style={stylesGame.gameBtn2}>
            <Image
              source={require('../img/149163.png')}
              style={stylesGame.image}
            />
            <Text style={stylesGame.text}> Game screen </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Game;
