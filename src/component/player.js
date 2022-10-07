import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import stylesGame from '../styles/game';
import Modal from './modal';

const Player = ({playerId}) => {
  const [player, setPlayer] = useState('');
  const [commander1, setCommander1] = useState('');
  const [commander2, setCommander2] = useState('');
  const [commander3, setCommander3] = useState('');
  const [commander4, setCommander4] = useState('');

  useEffect(() => {
    const getPlayer = async () => {
      const players = await AsyncStorage.getItem('Player' + playerId);
      setPlayer(JSON.parse(players));
    };
    getPlayer();
    // getCommander();
  }, []);

  const getCommander = () => {
    console.log(player.commanders);
    let commander = '';
    for (const [key, value] of Object.entries(player.commanders)) {
      commander = commander + key + ' : ' + value + ' ';
      console.log(`${key}: ${value}`);
    }
    setCommander1(commander);
    console.log(commander1);
  };

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
          <Image source={require('../img/plus.png')} style={stylesGame.image} />
          {/* <Icon name="rocket" color="white" size={30} ></Icon> */}
        </TouchableOpacity>
        <Text style={stylesGame.player1} onPress={() => getCommander()}>Get commander</Text>
      </View>
      <View style={player.color}>
        <Text style={stylesGame.player1}>{player.lifePoint}</Text>
        {/* <Text style={stylesGame.player1} onPress={() => getCommander()}>
          {player.name} {commander1}
        </Text> */}
        <Modal playerName={player.name} commander={commander1}  onPress={() => getCommander()}/>
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
      <Modal />
    </View>
  );
};

export default Player;
