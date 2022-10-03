import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import stylesGame from '../styles/game';

const Game = ({navigation}) => {
  let [lifePoint1, setLifePoint1] = React.useState(30);
  let [lifePoint2, setLifePoint2] = React.useState(10);
  function updateLifePoint(id) {
    if (id === lifePoint1) {
      lifePoint1--;
      setLifePoint1(lifePoint1);
    } else {
      lifePoint2--;
      setLifePoint2(lifePoint2);
    }
  }
  function getLifePoint(id) {
    if (id === lifePoint1) {
      return lifePoint1;
    } else {
      return lifePoint2;
    }
  }
  return (
    <View style={stylesGame.container}>
      <View style={stylesGame.firstPart}>
        <View style={stylesGame.firstPart}>
          <TouchableOpacity
            style={stylesGame.gameBtn1}
            >
            <Image
              source={require('../img/814208.png')}
              style={stylesGame.image}
            />
            <Text style={stylesGame.text}> Game screen </Text>
          </TouchableOpacity>
        </View>
        <View style={stylesGame.firstPart}>
          <Text style={stylesGame.player1}>{getLifePoint(lifePoint1)}</Text>
        </View>
        <View style={stylesGame.firstPart}>
          <TouchableOpacity style={stylesGame.gameBtn1} onPress={() => updateLifePoint(lifePoint1)}>
            <Image
              source={require('../img/149163.png')}
              style={stylesGame.image}
            />
            <Text style={stylesGame.text}> Game screen </Text>
          </TouchableOpacity>
        </View>
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
          <Text style={stylesGame.player1}>{getLifePoint(lifePoint2)}</Text>
        </View>
        <View style={stylesGame.secondPart}>
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => updateLifePoint(lifePoint2)}>
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
