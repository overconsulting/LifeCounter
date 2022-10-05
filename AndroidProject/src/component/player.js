import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import stylesGame from '../styles/game';
const Player = ({playerId}) => {
  const [player, setPlayer] = useState('');

  useEffect(() => {
    const getPlayer = async () => {
      const players = await AsyncStorage.getItem('Player' + playerId);
      setPlayer(JSON.parse(players));
    };
    getPlayer();
  }, []);

  const addLifePoint = () => {
    let lifePoint = player.lifePoint;
    lifePoint++;
    setPlayer({...player, lifePoint: lifePoint});
    AsyncStorage.setItem('Player' + playerId, JSON.stringify(player));
  };

  const minusLifePoint = () => {
    let lifePoint = player.lifePoint;
    lifePoint--;
    setPlayer({...player, lifePoint: lifePoint});
    AsyncStorage.setItem('Player' + playerId, JSON.stringify(player));
  };


  return (
    <View style={player.color}>
      <View style={player.color}>
        <TouchableOpacity
          style={stylesGame.gameBtn}
          onPress={() => addLifePoint()}>
          <Image
            source={require('../img/plus.png')}
            style={stylesGame.image}
          />
          {/* <Icon name="rocket" color="white" size={30} ></Icon> */}
        </TouchableOpacity>
      </View>
      <View style={player.color}>
        <Text style={stylesGame.player1}>{player.lifePoint}</Text>
        <Text style={stylesGame.player1}>{player.name}</Text>
      </View>
      <View style={player.color}>
        <TouchableOpacity
          style={stylesGame.gameBtn}
          onPress={() => minusLifePoint()}>
          <Image
            source={require('../img/minus.png')}
            style={stylesGame.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
