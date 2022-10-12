import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';


import {useSelector, useDispatch} from 'react-redux';
import { decrementLifePoint, incrementLifePoint } from '../slices/game';

import stylesGame from '../styles/game';
import Modal from './modal';

const Player = ({playerIndex, orientation}) => {
  

  const {lifePoints, style, name, color} = useSelector((state) => state.game.players[playerIndex]);
  const player = useSelector((state) => state.game.players[playerIndex]);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(player)
  },  [])

  return (

    // button orientation
    <View style={stylesGame.container}>
      <View style={[style, {backgroundColor: color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(incrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(decrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(incrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(decrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>

{/* Modal orientation  */}
      {orientation == 'right' && (
        <View style={[style, {backgroundColor: color}]}>

          <Modal
            playerIndex={playerIndex}
            orientation="right"
          />
        </View>
      )}
      {orientation == 'left' && (
          <View style={[style, {backgroundColor: color}]}>
            <Modal
              playerIndex={playerIndex}
              orientation="left"
            />
          </View>
        )}
      {orientation == 'top' && (
        <View style={[style, {backgroundColor: color}]}>
          <Modal
            playerIndex={playerIndex}
            orientation="top"
          />
        </View>
      )}
      {orientation == 'bottom' && (
        <View style={[style, {backgroundColor: color}]}>
          <Modal
            playerIndex={playerIndex}
            orientation="bottom"
          />
        </View>
      )}

{/* button opacity */}
      <View style={[style, {backgroundColor: color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(decrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(incrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(decrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )} 
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() =>dispatch(incrementLifePoint(playerIndex))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Player;
