import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import stylesHome from '../styles/home';
const Home = ({navigation}) => {
  return (
    <View style={stylesHome.home}>
      <View style={stylesHome.home}>
        <Text>Home</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={stylesHome.gameBtn1}>
          <Text>Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
