import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';

import stylesModal from '../styles/modal';

import {useSelector, useDispatch} from 'react-redux';
import {
  decrementCommanderDamage,
  incrementCommanderDamage,
} from '../slices/game';

const playerModal = ({playerName, orientation, playerLP, playerIndex}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const {damageCommanders, commanders} = useSelector((state) => state.game.players[playerName].payload);
  // const {color} = useSelector((state) => state.game.players[playerName].payload);
  const {color, damageCommanders} = useSelector((state) => state.game.players[0].payload);
  // 
  // const player = useSelector((state) => state.game.players[playerIndex]);
  const dispatch = useDispatch();


  useEffect(() => {
    // console.log('oh')
    // const preventUndefined = () => {
    //   if (typeof playerIndex== 'undefined' && typeof player == 'undefined') {
    //     console.log('undefined care !');
    //     console.log(player)
    //   } else {
    //     console.log(playerIndex); 
          
    //   }
    // }
    // preventUndefined()
  }, []);
  
  return (
    <View>
      {typeof playerIndex != 'undefined' && orientation == 'top' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.topView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>

              {damageCommanders.map((commanderDamage, index) => (
                <View style={stylesModal.btnContainer}>
                  <View
                    style={[
                      stylesModal.commanderContainer,
                      {backgroundColor: color},
                    ]}>
                    <TouchableOpacity style={stylesModal.gameBtn} onPress={()=>{ dispatch(incrementCommanderDamage(playerIndex))}}>
                      <Image
                        source={require('../img/plus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                    <Text style={stylesModal.text}>{commanderDamage}</Text>
                    <TouchableOpacity style={stylesModal.gameBtn} onPress={()=>{ dispatch(decrementCommanderDamage(playerIndex))}}>
                      <Image
                        source={require('../img/minus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {typeof playerIndex != 'undefined' && orientation == 'bottom' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.bottomView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              {damageCommanders.map((commanderDamage, index) => (
                <View style={stylesModal.btnContainer}>
                  <View
                    style={[
                      stylesModal.commanderContainer,
                      {backgroundColor: color},
                    ]}>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/plus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                    <Text style={stylesModal.text}>{commanderDamage}</Text>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/minus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {typeof playerIndex != 'undefined' && orientation == 'right' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.rightView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              {damageCommanders.map((commanderDamage, index) => (
                <View style={stylesModal.btnContainer}>
                  <View
                    style={[
                      stylesModal.commanderContainer,
                      {backgroundColor: color},
                    ]}>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/plus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                    <Text style={stylesModal.text}>{commanderDamage}</Text>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/minus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.text}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

      {typeof playerIndex != 'undefined' && orientation == 'left' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.leftView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.text}>{playerName}</Text>
              {damageCommanders.map((commanderDamage, index) => (
                <View style={stylesModal.btnContainer}>
                  <View
                    style={[
                      stylesModal.commanderContainer,
                      {backgroundColor: color},
                    ]}>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/plus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                    <Text style={stylesModal.text}>{commanderDamage}</Text>
                    <TouchableOpacity style={stylesModal.gameBtn}>
                      <Image
                        source={require('../img/minus.png')}
                        style={stylesModal.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
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
