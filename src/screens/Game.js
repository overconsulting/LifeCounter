import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';

//shared preferences / crypted
import stylesGame from '../styles/game';
import stylesGlobal from '../styles/global';

import Player from '../component/player';

const Game = ({navigation}) => {
  const players = useSelector(state => state.game.players);

  useEffect(() => {
    console.log(players, players.length);
  }, []);

  /*const playBoard = () => {
    console.log("this is the list" + playersList)
    if(playersList == 2){
      return (
        <View style={stylesGame.main}>
          <View style={stylesGame.container2players}>
            <Player playerId={0} orientation='top' />
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
            <Player playerId={1} orientation='bottom' />
          </View>
        </View>
      );}
      else if (playersList == 3) {
      return (
        <View style={stylesGame.container4players}>
          <View style={stylesGame.container3players}>
            <Player playerId={0} orientation='left' />
            <Player playerId={1} orientation='right' />
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
            <Player playerId={2} orientation='bottom'/>
          </View>
        </View>
      );
    } else if (playersList == 4) {
      return (
        <View style={stylesGame.container4players}>
          <View style={stylesGame.container3players}>
            <Player playerId={0} orientation='left' />
            <Player playerId={1} orientation = 'right' />
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
            <Player playerId={2} orientation='left'/>
            <Player playerId={3} orientation = 'right'/>
          </View>
        </View>
      );
    }
  };*/

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
                <Player playerIndex={2} orientation="bottom" />
              </View>
            </View>
          )}

          {/* {players.length == 4 && (
            <View style={stylesGame.containerMultiplePlayers}>
              <View style={stylesGame.container2PlayersRow}>
                <Player playerId={0} orientation="left" />
                <Player playerId={1} orientation="right" />
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
                <Player playerId={2} orientation="left" />
                <Player playerId={3} orientation="right" />
              </View>
            </View>
          )} */}
        </>
      )}
    </>
  );
};
export default Game;
