import React, {useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';

import stylesModal from '../styles/modal';
const playerModal = ({playerName, commander, orientation, damage, playerLP}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text>{playerName}</Text>
            <Text>{damage} : {commander}</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        {orientation == 'bottom' && (
            <View style={stylesModal.playerContainer2}>
              <Text style={stylesModal.player1}>{playerLP}</Text>
              <Text style={stylesModal.player1}>{playerName}</Text>
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
