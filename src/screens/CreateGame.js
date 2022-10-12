import React, {useState, useEffect} from 'react';
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

import {useDispatch, useSelector} from 'react-redux';
import {setPlayer} from '../slices/game';

import stylesPregame from '../styles/pregame';
import stylesGame from '../styles/game';
import stylesGlobal from '../styles/global';

const CreateGame = ({navigation}) => {
  const playersList = useSelector((state) => (state.game.players));

  const [firstPlayer, setFirstPlayer] = useState('');
  const [secondPlayer, setSecondPlayer] = useState('');
  const [thirdPlayer, setThirdPlayer] = useState('');
  const [fourthPlayer, setFourthPlayer] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState('');
  const [colorPickerColor, setcolorPickerColor] = useState('#000000')

  const dispatch = useDispatch();

  const [buttonColorPlayer1, setButtonColorPlayer1] = useState('#851800');
  const [buttonColorPlayer2, setButtonColorPlayer2] = useState('#1a8500');
  const [buttonColorPlayer3, setButtonColorPlayer3] = useState('#00857f');
  const [buttonColorPlayer4, setButtonColorPlayer4] = useState('#320085');

  useEffect(() => {
    if (playersList.length !== 0) {
      if (playersList[0]) {
        setFirstPlayer(playersList[0].name)
        setButtonColorPlayer1(playersList[0].color)
      }
      if (playersList[1]) {
        setSecondPlayer(playersList[1].name)
        setButtonColorPlayer2(playersList[1].color)
      }
      if (playersList[2]) {
        setThirdPlayer(playersList[2].name)
        setButtonColorPlayer3(playersList[2].color)
      }
      if (playersList[3]) {
        setThirdPlayer(playersList[3].name)
        setButtonColorPlayer4(playersList[3].color)
      }
    }
  }, [])

  // Function to save players info and go to game screen
  const goToGame = () => {
    let totalLifePoint = 20;
    if (thirdPlayer !== '') {
      totalLifePoint = 40;
    }

    if (firstPlayer != '' && secondPlayer != '') {
      dispatch(
        setPlayer({index: 0, player: {
          lifePoints: totalLifePoint,
          name: firstPlayer,
          style: stylesGame.firstPart,
          color: buttonColorPlayer1,
          commanders: [2, 3, 4],
          damageCommanders: [0, 0, 0],
        }})
      );

      dispatch(
        setPlayer({index: 1, player: {
          lifePoints: totalLifePoint,
          name: secondPlayer,
          style: stylesGame.secondPart,
          color: buttonColorPlayer2,
          commanders: [1, 3, 4],
          damageCommanders: [0, 0, 0],
        }})
      );

      if (thirdPlayer != '') {
        dispatch(
          setPlayer({index: 2, player: {
            lifePoints: totalLifePoint,
            name: thirdPlayer,
            style: stylesGame.thirdPart,
            color: buttonColorPlayer3,
            commanders: [1, 2, 4],
            damageCommanders: [0, 0, 0],
          }}),
        );

        if (fourthPlayer != '') {
          dispatch(
            setPlayer({index: 3, player: {
              lifePoints: totalLifePoint,
              name: fourthPlayer,
              style: stylesGame.fourthPart,
              color: buttonColorPlayer4,
              commanders: [1, 2, 3],
              damageCommanders: [0, 0, 0],
            }}),
          );
        }
      }

      navigation.navigate('Game');
    } else {
      alert('Il faut au moins deux joueurs !');
    }
  }

  const changeColor = (colors, key) => {
    if (key == 1) {
      setButtonColorPlayer1(colors);
    } else if (key == 2) {
      setButtonColorPlayer2(colors);
    } else if (key == 3) {
      setButtonColorPlayer3(colors);
    } else if (key == 4) {
      setButtonColorPlayer4(colors);
    }
  };

  return (
    <ImageBackground source={require('../img/bg3.jpg')} style={stylesGlobal.bg}>
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
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesPregame.btnText}>x</Text>
              </Pressable>
            </View>
            <View style={stylesPregame.contentView}>
              <Text style={stylesPregame.modalText}> Choississez la couleur </Text>

              <ColorPicker
                onColorChangeComplete={color => {
                  changeColor(color, key);
                }}
                color={colorPickerColor}
                sliderHidden={true}
                swatches={false}
                thumbSize={30}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={stylesGlobal.main}>
        <View style={stylesGlobal.firstContainer}>
          <Text style={[stylesGlobal.title, stylesGlobal.txtRed]}>
            Créer la partie
          </Text>
        </View>

        <View style={stylesGlobal.secondContainer}>
          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={firstPlayer}
              placeholder="Premier joueur"
              onChangeText={newText => setFirstPlayer(newText)}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer1},
              ]}
              onPress={() => {
                setKey(1), setcolorPickerColor(buttonColorPlayer1), setModalVisible(true);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={secondPlayer}
              placeholder="Second joueur"
              onChangeText={newText => setSecondPlayer(newText)}
              editable={firstPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer2},
              ]}
              onPress={() => {
                setKey(2), setcolorPickerColor(buttonColorPlayer2), setModalVisible(true);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={thirdPlayer}
              placeholder="Troisième joueur"
              onChangeText={newText => setThirdPlayer(newText)}
              editable={secondPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer3},
              ]}
              onPress={() => {
                setKey(3), setcolorPickerColor(buttonColorPlayer3), setModalVisible(true);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesPregame.inputContainer}>
            <TextInput
              style={stylesPregame.textInput}
              value={fourthPlayer}
              placeholder="Quatrième joueur"
              onChangeText={newText => setFourthPlayer(newText)}
              editable={thirdPlayer == '' ? false : true}
            />
            <TouchableOpacity
              style={[
                stylesPregame.btnColor,
                {backgroundColor: buttonColorPlayer4},
              ]}
              onPress={() => {
                setKey(4), setcolorPickerColor(buttonColorPlayer4), setModalVisible(true);
              }}>
              <Text style={stylesPregame.textColor}>Color</Text>
            </TouchableOpacity>
          </View>

          <View style={[stylesPregame.buttonContainer, stylesGlobal.marginTop50]}>
            <TouchableOpacity
              onPress={() => { goToGame(); }}
              style={[stylesGlobal.btnRed]}>
              <Text style={[stylesGlobal.txtWhite]}>Jouer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylesGlobal.btnRed, stylesGlobal.marginLeft50]}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={[stylesGlobal.txtWhite]}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default CreateGame;
