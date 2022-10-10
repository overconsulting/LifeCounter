import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';

import stylesModal from '../styles/modal';
const playerModal = ({
  playerName,
  commander,
  orientation,
  damage,
  playerLP,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {orientation == 'top' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.topView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              <Text style={stylesModal.text}>
                {damage} : {commander}
              </Text>
              <View style={stylesModal.btnContainer}>
                <TouchableOpacity style={stylesModal.gameBtn}>
                  <Image
                    source={require('../img/plus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
                <Text style={stylesModal.text}>{playerLP}</Text>
                <TouchableOpacity style={stylesModal.gameBtn2}>
                  <Image
                    source={require('../img/minus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {orientation == 'bottom' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.bottomView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              <Text style={stylesModal.text}>
                {damage} : {commander}
              </Text>
              <View style={stylesModal.btnContainer}>
                <TouchableOpacity style={stylesModal.gameBtn}>
                  <Image
                    source={require('../img/plus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
                <Text style={stylesModal.text}>{playerLP}</Text>
                <TouchableOpacity style={stylesModal.gameBtn2}>
                  <Image
                    source={require('../img/minus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {orientation == 'right' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.rightView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              <Text style={stylesModal.text}>
                {damage} : {commander}
              </Text>
              <View style={stylesModal.btnContainer}>
                <TouchableOpacity style={stylesModal.gameBtn}>
                  <Image
                    source={require('../img/plus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
                <Text style={stylesModal.text}>{playerLP}</Text>
                <TouchableOpacity style={stylesModal.gameBtn2}>
                  <Image
                    source={require('../img/minus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

      {orientation == 'left' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.leftView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              <Text style={stylesModal.text}>
                {damage} : {commander}
              </Text>
              <View style={stylesModal.btnContainer}>
                <TouchableOpacity style={stylesModal.gameBtn2}>
                  <Image
                    source={require('../img/minus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
                <Text style={stylesModal.text}>{playerLP}</Text>
                <TouchableOpacity style={stylesModal.gameBtn}>
                  <Image
                    source={require('../img/plus.png')}
                    style={stylesModal.image}
                  />
                </TouchableOpacity>
              </View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

      <Pressable onPress={() => setModalVisible(true)}>
        {orientation == 'bottom' && (
          <View style={stylesModal.playerContainer2}>
            <Text style={stylesModal.player}>{playerLP}</Text>
            <Text style={stylesModal.player}>{playerName}</Text>
          </View>
        )}
        {orientation == 'top' && (
          <View style={stylesModal.playerContainer2}>
            <Text style={stylesModal.player1}>{playerName}</Text>
            <Text style={stylesModal.player1}>{playerLP}</Text>
          </View>
        )}
        {orientation == 'left' && (
          <View style={stylesModal.playerContainer}>
            <Text style={stylesModal.player2}>{playerName}</Text>
            <Text style={stylesModal.player2}>{playerLP}</Text>
          </View>
        )}
        {orientation == 'right' && (
          <View style={stylesModal.playerContainer}>
            <Text style={stylesModal.player3}>{playerLP}</Text>
            <Text style={stylesModal.player3}>{playerName}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default playerModal;
