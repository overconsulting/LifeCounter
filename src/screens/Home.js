import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import stylesHome from '../styles/home';
const Home = ({navigation}) => {

  return (
    <ImageBackground source={require('../img/bg.png')} style={stylesHome.bg}>
    <View style={stylesHome.home}>
      <Text style={stylesHome.title}> Welcome to LifePoint counteur</Text>
      <View style={stylesHome.home}>
        <TouchableOpacity onPress={() => navigation.navigate('Pregame')} style={stylesHome.gameBtn}>
          <Text>Pre - Game</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};
export default Home;
