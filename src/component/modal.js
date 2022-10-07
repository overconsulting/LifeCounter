import React,{useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';


import stylesModal from '../styles/modal';
const playerModal = ({playerName}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text>{playerName}</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={stylesModal.player2}>{playerName}</Text>
      </Pressable>
    </View>
  );
};
export default playerModal;