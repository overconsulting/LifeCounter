import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

//shared preferences / crypted
import stylesGame from '../styles/game';
import Player from '../component/player';

import {useSelector} from 'react-redux';


const Game = ({navigation}) => {
  const playersList = useSelector((state) => (state.game.players).length);

  useEffect(() => {
    console.log(playersList)
  }, []);

  const playBoard = () => {
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
  };

  return (
    <View style={stylesGame.main}>
      <View style={stylesGame.main}>{playBoard()}</View>
    </View>
  );
};
export default Game;
