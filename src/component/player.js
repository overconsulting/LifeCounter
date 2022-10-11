import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';


import {useSelector, useDispatch} from 'react-redux';
import { decrementLifePoint, incrementLifePoint } from '../slices/game';

import stylesGame from '../styles/game';
import Modal from './modal';

const Player = ({playerId, orientation}) => {
  

  const {lifePoints, style, name, color} = useSelector((state) => state.game.players[playerId].payload);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(playerIndex);
  // }, []);

  return (

    // button orientation
    <View style={stylesGame.container}>
      <View style={[style, {backgroundColor: color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(incrementLifePoint(playerId))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(decrementLifePoint(playerId))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(incrementLifePoint(playerId))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(decrementLifePoint(playerId))}>
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
            playerName={name}
            playerIndex={playerId}
            orientation="right"
            playerLP={lifePoints}
          />
        </View>
      )}
      {orientation == 'left' && (
          <View style={[style, {backgroundColor: color}]}>
            <Modal
              playerName={name}
              playerIndex={playerId}
              orientation="left"
              playerLP={lifePoints}
            />
          </View>
        )}
      {orientation == 'top' && (
        <View style={[style, {backgroundColor: color}]}>
          <Modal
            playerName={name}
            playerIndex={playerId}
            orientation="top"
            playerLP={lifePoints}
          />
        </View>
      )}
      {orientation == 'bottom' && (
        <View style={[style, {backgroundColor: color}]}>
          <Modal
            playerName={name}
            playerIndex={playerId}
            orientation="bottom"
            playerLP={lifePoints}
          />
          {/* {getCommander()} */}
        </View>
      )}

{/* button opacity */}
      <View style={[style, {backgroundColor: color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(decrementLifePoint(playerId))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => dispatch(incrementLifePoint(playerId))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => dispatch(decrementLifePoint(playerId))}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )} 
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() =>dispatch(incrementLifePoint(playerId))}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>
      <Modal />
    </View>
  );
};

export default Player;
