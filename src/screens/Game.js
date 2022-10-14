import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { clearStorage } from '../slices/game';

//shared preferences / crypted
import stylesGame from '../styles/game';
import stylesGlobal from '../styles/global';

import Player from '../component/player';

const Game = ({navigation}) => {
  const players = useSelector(state => state.game.players);
  const dispatch = useDispatch()


  useEffect(() => {
    console.log(players, players.length);
  }, []);

  return (
    <>
      {players.length !== 0 && (
        <>
          {players.length === 2 && (
            <View style={stylesGlobal.main}>
              <View style={stylesGame.container2players}>
                <Player playerIndex={0} orientation="top" />
              </View>
              <View style={stylesGame.btnContainer}>
                <TouchableOpacity
                  style={stylesGame.gameBtn}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Text style={stylesGame.text}>Accueil</Text>
                </TouchableOpacity>
              </View>
              <View style={stylesGame.container2players}>
                <Player playerIndex={1} orientation="bottom" />
              </View>
              <View style={stylesGame.btnContainer}>
                <TouchableOpacity style={stylesGame.gameBtn} onPress={() => {navigation.navigate('Home') }}>
                  <Text style={stylesGame.text}>Restart Game</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {players.length === 3 && (
            <View style={stylesGame.containerMultiplePlayers}>
              <View style={stylesGame.container2PlayersRow}>
                <Player playerIndex={0} orientation="left" />
                <Player playerIndex={1} orientation="right" />
              </View>
              <View style={stylesGame.btnContainer}>
                <TouchableOpacity
                  style={stylesGame.gameBtn}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Text style={stylesGame.text}>Accueil</Text>
                </TouchableOpacity>
              </View>
              <View style={stylesGame.container3playersAlone}>
                <Player playerIndex={2} orientation="left" />
              </View>
            </View>
          )}

          {players.length == 4 && (
            
            <View style={stylesGame.containerMultiplePlayers}>
              <View style={stylesGame.container2PlayersRow}>
                <Player playerIndex={0} orientation="left" />
                <Player playerIndex={1} orientation="right" />
              </View>
              <View style={stylesGame.btnContainer}>
                <TouchableOpacity
                  style={stylesGame.gameBtn}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Text style={stylesGame.text}>Accueil</Text>
                </TouchableOpacity>
                
              </View>
              <View style={stylesGame.container2PlayersRow}>
                <Player playerIndex={2} orientation="left" />
                <Player playerIndex={3} orientation="right" />
              </View>
            </View>
          )}
        </>
      )}
    </>
  );
};
export default Game;
