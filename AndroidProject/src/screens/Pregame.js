import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesPregame from '../styles/pregame';
import stylesGame from '../styles/game';

const Pregame = ({navigation}) => {
  let [firstPlayer, setFirstPlayer] = React.useState('');
  let [secondPlayer, setSecondPlayer] = React.useState('');
  let [thirdPlayer, setThirdPlayer] = React.useState('');
  let [fourthPlayer, setFourthPlayer] = React.useState('');
  async function goToGame() {
    if (firstPlayer != '' && secondPlayer != '') {
      await AsyncStorage.setItem('Player1', JSON.stringify({lifePoint:20, name:firstPlayer, color:stylesGame.firstPart}));
      
      navigation.navigate('Game');
    } else {
      alert('Please enter atleat 2 players');
    }
  }

  return (
    <View style={stylesPregame.main}>
      <View style={stylesPregame.firstContainer}>
        <Text style={stylesPregame.title}> This is the lobby for the game</Text>
      </View>
      <View style={stylesPregame.secondContainer}>
        <Text> Put your nickname : </Text>
        <TextInput
          style={stylesPregame.textInput}
          placeholder="First Player"
          onChangeText={setFirstPlayer}
        />
        <TextInput
          style={stylesPregame.textInput}
          placeholder="Second Player"
          onChangeText={setSecondPlayer}
          editable={firstPlayer == '' ? false : true}
        />
        <TextInput
          style={stylesPregame.textInput}
          placeholder="Third Player"
          onChangeText={setThirdPlayer}
          editable={secondPlayer == '' ? false : true}
        />
        <TextInput
          style={stylesPregame.textInput}
          placeholder="Fourth Player"
          onChangeText={setFourthPlayer}
          editable={thirdPlayer == '' ? false : true}
        />
        <TouchableOpacity
          onPress={() => {
            goToGame();
          }}
          style={stylesPregame.startBtn}>
          <Text style={stylesPregame.text}>Start the game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Pregame;
