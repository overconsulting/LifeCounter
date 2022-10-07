import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import stylesGame from '../styles/game';
import Modal from './modal';

const Player = ({playerId, orientation}) => {
  const [player, setPlayer] = useState('');

  useEffect(() => {
    const getPlayer = async () => {
      const player = await AsyncStorage.getItem('Player' + playerId);
      setPlayer(JSON.parse(player));
      console.log(player);
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
    <View style={stylesGame.container}>
      <View style={player.color}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>


      {orientation == 'right' && (
        <View style={player.color}>
          {/* <Text style={stylesGame.player2}>{player.lifePoint}</Text> */}
          <Modal
            playerName={player.name}
            orientation="right"
            damage={player.damage}
            commander={player.commanders}
            playerLP={player.lifePoint}
            onPress={() => getCommander()}
          />
        </View>
      )}
      {orientation == 'left' && (
          <View style={player.color}>
            <Modal
              playerName={player.name}
              orientation="left"
              commander={player.commanders}
              playerLP={player.lifePoint}
              onPress={() => getCommander()}
            />
          </View>
        )}
      {orientation == 'top' && (
        <View style={player.color}>
          <Modal
            playerName={player.name}
            orientation="top"
            commander={player.commanders}
            playerLP={player.lifePoint}
            onPress={() => getCommander()}
          />
        </View>
      )}
      {orientation == 'bottom' && (
        <View style={player.color}>
          <Modal
            playerName={player.name}
            orientation="bottom"
            commander={player.commanders}
            playerLP={player.lifePoint}
            onPress={() => getCommander()}
          />
        </View>
      )}

      <View style={player.color}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>
      <Modal />
    </View>
  );
};

export default Player;
