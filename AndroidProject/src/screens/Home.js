import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import stylesHome from '../styles/home';
const Home = ({navigation}) => {
    let [name] = React.useState('Louis');
  return (
    <View style={stylesHome.home}>
      <View style={stylesHome.home}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Text>Game</Text>
        </TouchableOpacity>
        <TextInput style={stylesHome.textInput} value={name} onChange />
      </View>
    </View>
  );
};
export default Home;
