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

const playerModal = ({orientation, playerIndex}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const player = useSelector(state => state.game.players[playerIndex]);
  const players = useSelector(state => state.game.players);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(playerIndex);
  }, []);

  return (
    <View>
      {typeof playerIndex != 'undefined' && orientation == 'top' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.topView}>
            <View style={stylesModal.modalView}>
              <View style={stylesModal.modalX}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={stylesModal.modalXText}>x</Text>
                </Pressable>
              </View>
              {player.damageCommanders.map((commanderDamage, index) => (
                <>
                  {players[index] && players[index] != player && (
                    <View
                      key={`commande-${index}`}
                      style={stylesModal.btnContainer}>
                        <Text style={stylesModal.modalPlayerName} >Commander : {players[index].name}</Text>
                      <View
                        style={[
                          stylesModal.commanderContainer,
                          {backgroundColor: players[index].color},
                        ]}>
                        <TouchableOpacity
                          style={stylesModal.gameBtn}
                          onPress={() => {
                            dispatch(
                              incrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/plus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                        <Text style={stylesModal.text}>{commanderDamage}</Text>
                        <TouchableOpacity
                          style={stylesModal.gameBtn}
                          onPress={() => {
                            dispatch(
                              decrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/minus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </>
              ))}

            </View>
          </View>
        </Modal>
      )}

      {typeof playerIndex != 'undefined' && orientation == 'bottom' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.bottomView}>
            <View style={stylesModal.modalView}>
              <View style={stylesModal.modalX}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={stylesModal.modalXText}>x</Text>
                </Pressable>
              </View>

              {player.damageCommanders.map((commanderDamage, index) => (
                <>
                  {players[index] && players[index] != player && (
                    
                    <View
                      key={`commande-${index}`}
                      style={stylesModal.btnContainer}>
                      <Text style={stylesModal.modalPlayerName} >Commander : {players[index].name}</Text>
                      <View
                        style={[
                          stylesModal.commanderContainer,
                          {backgroundColor: players[index].color},
                        ]}>
                        <TouchableOpacity
                          style={stylesModal.gameBtn}
                          onPress={() => {
                            dispatch(
                              incrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/plus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                        
                        <Text style={stylesModal.text}>
                             {commanderDamage}
                        </Text>
                        <TouchableOpacity
                          style={stylesModal.gameBtn}
                          onPress={() => {
                            dispatch(
                              decrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/minus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </>
              ))}
            </View>
          </View>
        </Modal>
      )}

      {typeof playerIndex != 'undefined' && orientation == 'right' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.rightView}>
            <View style={stylesModal.modalView}>
              <View style={stylesModal.modalX}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={stylesModal.modalXText}>x</Text>
                </Pressable>
              </View>
              {player.damageCommanders.map((commanderDamage, index) => (
                <>
                  {players[index] && players[index] != player && (
                    <View
                      key={`commande-${index}`}
                      style={stylesModal.btnContainer}>
                      <View
                        style={[
                          stylesModal.commanderContainer,
                          {backgroundColor: players[index].color},
                        ]}>
                        <TouchableOpacity style={stylesModal.gameBtn}
                        onPress={() => {
                            dispatch(
                              incrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/plus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                        <Text style={stylesModal.text}>{commanderDamage}</Text>
                        <TouchableOpacity style={stylesModal.gameBtn}
                        onPress={() => {
                          dispatch(
                            decrementCommanderDamage({
                              playerIndex: playerIndex,
                              commanderIndex: index,
                            }),
                          );
                        }}>
                          <Image
                            source={require('../img/minus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </>
              ))}
              </View>
          </View>
        </Modal>
      )}

      {typeof playerIndex != 'undefined' && orientation == 'left' && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={stylesModal.leftView}>
            <View style={stylesModal.modalView}>
              <View style={stylesModal.modalX}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={stylesModal.modalXText}>x</Text>
                </Pressable>
              </View>
              <Text style={stylesModal.text}>{player.name}</Text>
              {player.damageCommanders.map((commanderDamage, index) => (
                <>
                  {players[index] && players[index] != player && (
                    <View
                      key={`commande-${index}`}
                      style={stylesModal.btnContainer}>
                      <View
                        style={[
                          stylesModal.commanderContainer,
                          {backgroundColor: players[index].color},
                        ]}>
                        <TouchableOpacity style={stylesModal.gameBtn}
                        onPress={() => {
                          dispatch(
                            incrementCommanderDamage({
                              playerIndex: playerIndex,
                              commanderIndex: index,
                            }),
                          );
                        }}>
                          <Image
                            source={require('../img/plus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                        <Text style={stylesModal.text}>{commanderDamage}</Text>
                        <TouchableOpacity style={stylesModal.gameBtn}
                          onPress={() => {
                            dispatch(
                              decrementCommanderDamage({
                                playerIndex: playerIndex,
                                commanderIndex: index,
                              }),
                            );
                          }}>
                          <Image
                            source={require('../img/minus.png')}
                            style={stylesModal.image}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </>
              ))}
            </View>
          </View>
        </Modal>
      )}

      <Pressable onPress={() => setModalVisible(true)}>
        {orientation == 'bottom' && (
          <View style={stylesModal.playerContainer2}>
            <Text style={stylesModal.player}>{player.name}</Text>
            <Text style={stylesModal.player}>{player.lifePoints}</Text>
          </View>
        )}
        {orientation == 'top' && (
          <View style={stylesModal.playerContainer2}>
            <Text style={stylesModal.player1}>{player.name}</Text>
            <Text style={stylesModal.player1}>{player.lifePoints}</Text>
          </View>
        )}
        {orientation == 'left' && (
          <View style={stylesModal.playerContainer}>
            <Text style={stylesModal.player2}>{player.lifePoints}</Text>
            <Text style={stylesModal.player2}>{player.name}</Text>
          </View>
        )}
        {orientation == 'right' && (
          <View style={stylesModal.playerContainer}>
            <Text style={stylesModal.player3}>{player.name}</Text>
            <Text style={stylesModal.player3}>{player.lifePoints}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default playerModal;
