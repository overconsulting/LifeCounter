import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import stylesGlobal from '../styles/global';

const Home = ({navigation}) => {

  return (
    <ImageBackground source={require('../img/bg.png')} style={stylesGlobal.bg}>
      <View style={stylesGlobal.main}>
        <Text style={[stylesGlobal.title, stylesGlobal.txtRed, stylesGlobal.firstContainer]}>Compteur de point de vie</Text>
        <View style={[stylesGlobal.center, stylesGlobal.secondContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateGame')} style={stylesGlobal.btnRed}>
            <Text style={stylesGlobal.txtWhite}>Jouer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
