import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Modal,
  Pressable,
} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import stylesPregame from '../styles/pregame';
import stylesGame from '../styles/game';

const Pregame = ({navigation}) => {
  const [firstPlayer, setFirstPlayer] = useState('');
  const [secondPlayer, setSecondPlayer] = useState('');
  const [thirdPlayer, setThirdPlayer] = useState('');
  const [fourthPlayer, setFourthPlayer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState('');
  const [buttonColorPlayer1, setButtonColorPlayer1] = useState('#dc143c');
  const [buttonColorPlayer2, setButtonColorPlayer2] = useState('#87cefa');
  const [buttonColorPlayer3, setButtonColorPlayer3] = useState('#006400');
  const [buttonColorPlayer4, setButtonColorPlayer4] = useState('#800000');

  // Function to save players info and go to game screen
  async function goToGame() {
    if (firstPlayer != '' && secondPlayer != '') {
      await AsyncStorage.setItem(
        //AsyncStorage is like the localstorage but for mobile devices
        'Player1',
        JSON.stringify({
          lifePoint: '40',
          name: firstPlayer,
          style: stylesGame.firstPart,
          color: buttonColorPlayer1,
          commanders: [2, 3, 4],
          damageCommanders: [0, 0, 0],
        }),
      );

      await AsyncStorage.setItem(
        'Player2',
        JSON.stringify({
          lifePoint: '40',
          name: secondPlayer,
          style: stylesGame.secondPart,
          color: buttonColorPlayer2,
          commanders: [1, 3, 4],
          damageCommanders: [0, 0, 0],
        }),
      );

      await AsyncStorage.setItem('nbPlayer', '2');

      if (thirdPlayer != '') {
        await AsyncStorage.setItem(
          'Player3',
          JSON.stringify({
            lifePoint: '40',
            name: thirdPlayer,
            style: stylesGame.thirdPart,
            color: buttonColorPlayer3,
            commanders: [1, 2, 4],
            damageCommanders: [0, 0, 0],
          }),
        );

        await AsyncStorage.setItem('nbPlayer', '3');

        if (fourthPlayer != '') {
          await AsyncStorage.setItem(
            'Player4',
            JSON.stringify({
              lifePoint: '40',
              name: fourthPlayer,
              style: stylesGame.fourthPart,
              color: buttonColorPlayer4,
              commanders: [1, 2, 3],
              damageCommanders: [0, 0, 0],
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
  
  const changeColor = (colors, key) => {
    if (key == 1) {
      setButtonColorPlayer1(colors);
      console.log(buttonColorPlayer1);
    } else if (key == 2) {
      setButtonColorPlayer2(colors);
      console.log(buttonColorPlayer2);
    } else if (key == 3) {
      setButtonColorPlayer3(colors);
      console.log(buttonColorPlayer3);
    } else if (key == 4) {
      setButtonColorPlayer4(colors);
      console.log(buttonColorPlayer4);
    } else {
      alert('Something went wrong');
      console.log(key);
    }
  };


  return (
    <ImageBackground
      source={require('../img/bg3.jpg')}
      style={stylesPregame.bg}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={stylesPregame.modalPosition}>
          <View style={stylesPregame.modalView}>
            <View style={stylesPregame.btn}>
              <Pressable
                style={stylesPregame.btnColor}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesPregame.btnText}>x</Text>
              </Pressable>
            </View>
            <View style={stylesPregame.contentView}>
              <Text style={stylesPregame.modalText}> Choose your color </Text>

              <ColorPicker
                onColorChangeComplete={color => {
                  console.log(color), changeColor(color, key);
                }}
                sliderHidden={true}
                swatches={false}
                thumbSize={30}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={stylesPregame.main}>
        <View style={stylesPregame.firstContainer}>
          <Text style={stylesPregame.title}>
            {' '}
            This is the lobby for the game
          </Text>
        </View>

        <View style={stylesPregame.secondContainer}>
          <Text style={stylesPregame.text}> Put your nickname : </Text>
          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={firstPlayer}
              placeholder="First Player"
              onChangeText={newText => setFirstPlayer(newText)}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer1},
              ]}
              onPress={() => {
                setModalVisible(true), console.log('ok'), setKey(1);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={secondPlayer}
              placeholder="Second Player"
              onChangeText={newText => setSecondPlayer(newText)}
              editable={firstPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer2},
              ]}
              onPress={() => {
                setModalVisible(true), console.log('ok'), setKey(2);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={thirdPlayer}
              placeholder="Third Player"
              onChangeText={newText => setThirdPlayer(newText)}
              editable={secondPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer3},
              ]}
              onPress={() => {
                setModalVisible(true), console.log('ok'), setKey(3);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={fourthPlayer}
              placeholder="Fourth Player"
              onChangeText={newText => setFourthPlayer(newText)}
              editable={thirdPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer4},
              ]}
              onPress={() => {
                setModalVisible(true), console.log('ok'), setKey(4);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                goToGame();
              }}
              style={stylesPregame.startBtn}>
              <Text style={stylesPregame.text}>Start the game</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesPregame.startBtn}
              onPress={() => {
                navigation.navigate('Game');
              }}>
              <Text style={stylesPregame.text}>Go back to game</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesPregame.startBtn}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={stylesPregame.text}>Go back to home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Pregame;
