import React, { useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesGame from '../styles/game';
const Player = ({playerId,color}) => {
    const [player,setPlayer] = useState('')
    useEffect(() =>{
        const getPlayer = async () =>{
            const players = await AsyncStorage.getItem('Player'+playerId)
            setPlayer(JSON.parse(players))
            console.log(JSON.stringify(players))
        }
        getPlayer()
    },[]);
  return (
    <View style={color}>
      <View style={color}>
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
      <View style={color}>
        <Text style={stylesGame.player1}>{player.lifePoint}</Text>
        <Text style={stylesGame.player1}>{player.name}</Text>
      </View>
      <View style={color}>
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
