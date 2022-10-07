import React,{useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';


import stylesModal from '../styles/modal';
const playerModal = ({playerName,commander,orientation}) => {
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
            <Text>commander : {commander}</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        {/* {orientation == 'top' || orientation == 'bot' && (
          <Text style={stylesModal.player1}>{playerName}</Text>
        )}
        {orientation == 'left' && (
          <Text style={stylesModal.player2}>{playerName}</Text>
          )}
        {orientation == 'right' && (
          <Text style={stylesModal.player3}>{playerName}</Text>
          )} */}

        <Text style={stylesModal.player1}>{playerName}</Text>
      </Pressable>
    </View>
  );
};
export default playerModal;