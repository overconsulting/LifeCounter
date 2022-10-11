import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import stylesGame from '../styles/game';
import Modal from './modal';

const Player = ({playerId, orientation}) => {
  const [player, setPlayer] = useState('');
  const [theCommander, setTheCommander] = useState('');


  useEffect(() => {
    const getPlayer = async () => {
      const players = await AsyncStorage.getItem('Player' + playerId);
      setPlayer(JSON.parse(players));
      console.log(players);
    };
    getPlayer();
  }, []);
  
  // const getCommander = () =>{
  //   let commander = player.commanders;
  //   // let damage = player.damageCommanders;
  //   commander.map((command)=>{
  //     // commander = commander + commander;
  //     console.log(command);
  //     setTheCommander(commander);
  //     return(
  //       <Modal
  //           playerName={player.name}
  //           orientation="bottom"
  //           damage={player.damageCommanders}
  //           commander1 = {command}
  //           playerLP={player.lifePoint}
  //         />
  //     )
  //   })
  // };

  const addLifePoint = () => {
    let lifePoint = player.lifePoint;
    lifePoint++;
    setPlayer({...player, lifePoint: lifePoint});
    AsyncStorage.setItem('Player' + playerId, JSON.stringify(player));
  };

  const minusLifePoint = () => {
    let lifePoint = player.lifePoint;
    lifePoint--;
    setPlayer({...player, lifePoint: lifePoint});
    AsyncStorage.setItem('Player' + playerId, JSON.stringify(player));
  };

  return (

    // button orientation
    <View style={stylesGame.container}>
      <View style={[player.style, {backgroundColor: player.color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => {addLifePoint()}}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
      </View>

{/* Modal orientation  */}
      {orientation == 'right' && (
        <View style={[player.style, {backgroundColor: player.color}]}>

          <Modal
            playerName={player.name}
            orientation="right"
            damage={player.damageCommanders}
            commander={player.commanders}
            playerLP={player.lifePoint}
          />
        </View>
      )}
      {orientation == 'left' && (
          <View style={[player.style, {backgroundColor: player.color}]}>
            <Modal
              playerName={player.name}
              orientation="left"
              damage={player.damageCommanders}
              commander={player.commanders}
              playerLP={player.lifePoint}
              // onPress={() => getCommander()}
            />
          </View>
        )}
      {orientation == 'top' && (
        <View style={[player.style, {backgroundColor: player.color}]}>
          <Modal
            playerName={player.name}
            orientation="top"
            damage={player.damageCommanders}
            commander={theCommander}
            playerLP={player.lifePoint}
            onPress={() => getCommander()}
          />
        </View>
      )}
      {orientation == 'bottom' && (
        <View style={[player.style, {backgroundColor: player.color}]}>
          <Modal
            playerName={player.name}
            orientation="bottom"
            damage={player.damageCommanders}
            commander1 = {theCommander}
            commander2 = {theCommander}
            commander3 = {theCommander}
            playerLP={player.lifePoint}
          />
          {/* {getCommander()} */}
        </View>
      )}

{/* button opacity */}
      <View style={[player.style, {backgroundColor: player.color}]}>
        {orientation == 'bottom' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'top' && (
          <TouchableOpacity
            style={stylesGame.gameBtn}
            onPress={() => addLifePoint()}>
            <Image
              source={require('../img/plus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )}
        {orientation == 'right' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() => minusLifePoint()}>
            <Image
              source={require('../img/minus.png')}
              style={stylesGame.image}
            />
          </TouchableOpacity>
        )} 
        {orientation == 'left' && (
          <TouchableOpacity
            style={stylesGame.gameBtn2}
            onPress={() =>addLifePoint()}>
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
