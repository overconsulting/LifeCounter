import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import stylesGame from '../styles/game';
const Player = ({playerId}) => {
    const [player,setPlayer] = useState(null)
    useEffect(() =>{
        const getPlayer = async () =>{
            const player1 = await AsyncStorage.getItem('Player'+playerId)
            setPlayer(JSON.parse(player1))
        }
        getPlayer()
    },[]);
  return (
    <View style={player.color}>
      <View style={player.color}>
        <TouchableOpacity
          style={stylesGame.gameBtn1}
        //   onPress={() => plusLifePoint(lifePoint1)}
          >
          <Image
            source={require('../img/814208.png')}
            style={stylesGame.image}
          />
          <Text style={stylesGame.text}> Game screen </Text>
        </TouchableOpacity>
      </View>
      <View style={player.color}>
        <Text style={stylesGame.player1}>{player.lifepoint}</Text>
        <Text style={stylesGame.player1}>{player.name}</Text>
      </View>
      <View style={player.color}>
        <TouchableOpacity
          style={stylesGame.gameBtn1}
        //   onPress={() => minusLifePoint(lifePoint1)}
          >
          <Image
            source={require('../img/149163.png')}
            style={stylesGame.image}
          />
          <Text style={stylesGame.text}> Game screen </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
