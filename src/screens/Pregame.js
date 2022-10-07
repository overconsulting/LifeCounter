import React from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesPregame from '../styles/pregame';
import stylesGame from '../styles/game';

const Pregame = ({navigation}) => {

  let [firstPlayer, setFirstPlayer] = React.useState('');
  let [secondPlayer, setSecondPlayer] = React.useState('');
  let [thirdPlayer, setThirdPlayer] = React.useState('');
  let [fourthPlayer, setFourthPlayer] = React.useState('');

// Function to save players info and go to game screen
  async function goToGame() {
    if (firstPlayer != '' && secondPlayer != '') {
      await AsyncStorage.setItem(     //AsyncStorage is like the localstorage but for mobile devices
        'Player1',
        JSON.stringify({
          lifePoint: '40',
          name: firstPlayer,
          color: stylesGame.firstPart,
          commanders: [2 , 3 , 4],
          damageCommanders: [0 , 0 , 0],
        }),
      );

      await AsyncStorage.setItem(
        'Player2',
        JSON.stringify({
          lifePoint: '40',
          name: secondPlayer,
          color: stylesGame.secondPart,
          commanders: [1,3,4],
          damageCommanders: [0 , 0 , 0],
        }),
      );

      await AsyncStorage.setItem('nbPlayer', '2');

      if (thirdPlayer != '') {
        await AsyncStorage.setItem(
          'Player3',
          JSON.stringify({
            lifePoint: '40',
            name: thirdPlayer,
            color: stylesGame.thirdPart,
            commanders: [1,2,4],
            damageCommanders: [0 , 0 , 0],
          }),
        );

        await AsyncStorage.setItem('nbPlayer', '3');

        if (fourthPlayer != '') {
          await AsyncStorage.setItem(
            'Player4',
            JSON.stringify({
              lifePoint: '40',
              name: fourthPlayer,
              color: stylesGame.fourthPart,
              commanders: [1,2,3],
              damageCommanders: [0 , 0 , 0],
            }),
          );

          await AsyncStorage.setItem('nbPlayer', '4');

        }
      }
      navigation.navigate('Game');

    } else {
      alert('Please enter atleat 2 players');
    }
  }

  return (
    <ImageBackground source={require('../img/bg3.jpg')} style={stylesPregame.bg}>
    <View style={stylesPregame.main}>
      <View style={stylesPregame.firstContainer}>
        <Text style={stylesPregame.title}> This is the lobby for the game</Text>
      </View>
      <View style={stylesPregame.secondContainer}>
        <Text style={stylesPregame.text}> Put your nickname : </Text>
        <TextInput
          style={stylesPregame.textInput}
          value={firstPlayer}
          placeholder="First Player"
          onChangeText={newText => setFirstPlayer(newText)}
        />
        <TextInput
          style={stylesPregame.textInput}
          value={secondPlayer}
          placeholder="Second Player"
          onChangeText={newText => setSecondPlayer(newText)}
          editable={firstPlayer == '' ? false : true}
        />
        <TextInput
          style={stylesPregame.textInput}
          value={thirdPlayer}
          placeholder="Third Player"
          onChangeText={newText => setThirdPlayer(newText)}
          editable={secondPlayer == '' ? false : true}
        />
        <TextInput
          style={stylesPregame.textInput}
          value={fourthPlayer}
          placeholder="Fourth Player"
          onChangeText={newText => setFourthPlayer(newText)}
          editable={thirdPlayer == '' ? false : true}
        />
        <TouchableOpacity
          onPress={() => {
            goToGame();
          }}
          style={stylesPregame.startBtn}>
          <Text style={stylesPregame.text}>Start the game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesPregame.startBtn} onPress={()=>{navigation.navigate('Game')}}>
          <Text style={stylesPregame.text}>Go back to game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesPregame.startBtn} onPress={()=>{navigation.navigate('Home')}}>
          <Text style={stylesPregame.text}>Go back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};
export default Pregame;
