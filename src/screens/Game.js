import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Modal, Pressable} from 'react-native';

//shared preferences / crypted
import stylesGame from '../styles/game';
import Player from '../component/player';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Game = ({navigation}) => {
  const [nbPlayer, setNbPlayer] = useState('');
  useEffect(() => {
    const getNbPlayer = async () => {
      const nbPlayer = await AsyncStorage.getItem('nbPlayer');
      setNbPlayer(nbPlayer);
    };
    getNbPlayer();
  }, []);

  const playBoard = () => {
    if (nbPlayer == '2') {
      return (
        <View style={stylesGame.main}>
          <View style={stylesGame.container2players}>
            <Player playerId="1" orientation='top' />
          </View>
          <View style={stylesGame.btnContainer}>
            <TouchableOpacity
              style={stylesGame.gameBtn}
              onPress={() => {
                navigation.navigate('Pregame');
              }}>
              <Text style={stylesGame.text}>Back to lobby</Text>
            </TouchableOpacity>
          </View>
          <View style={stylesGame.container2players}>
            <Player playerId="2" orientation='bottom'/>
          </View>
        </View>
      );
    } else if (nbPlayer == '3') {
      return (
        <View style={stylesGame.container4players}>
          <View style={stylesGame.container3players}>
            <Player playerId="1" orientation='left'/>
            <Player playerId="2" orientation='right'/>
          </View>
          <View style={stylesGame.btnContainer}>
            <TouchableOpacity
              style={stylesGame.gameBtn}
              onPress={() => {
                navigation.navigate('Pregame');
              }}>
              <Text style={stylesGame.text}>Back to lobby</Text>
            </TouchableOpacity>
          </View>
          <View style={stylesGame.container3players3}>
            <Player playerId="3" orientation='bottom'/>
          </View>
        </View>
      );
    } else if (nbPlayer == '4') {
      return (
        <View style={stylesGame.container4players}>
          <View style={stylesGame.container3players}>
            <Player playerId="1" orientation='left'/>
            <Player playerId="2" orientation = 'right'/>
          </View>
          <View style={stylesGame.btnContainer}>
            <TouchableOpacity
              style={stylesGame.gameBtn}
              onPress={() => {
                navigation.navigate('Pregame');
              }}>
              <Text style={stylesGame.text}>Back to lobby</Text>
            </TouchableOpacity>
          </View>
          <View style={stylesGame.container3players}>
            <Player playerId="3" orientation='left'/>
            <Player playerId="4" orientation = 'right'/>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={stylesGame.main}>
      <View style={stylesGame.main}>{playBoard()}</View>
    </View>
  );
};
export default Game;
