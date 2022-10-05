import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main:{
    flex: 3,
  },
  container2players : {
    flex: 1,
  },
  container3players:{
    flex: 2,
    flexDirection: 'row',
  },
  container3players3:{
    flex: 1,
  },
  container4players: {
    flex: 1,
    alignItems: 'stretch',
  },

  firstPart: {
    flex: 1,
    backgroundColor: 'red',
    width: 'auto',
    height: 'auto',
  },
  secondPart: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    width: 'auto',
    height: 'auto',
  },
  thirdPart:{
    flex: 1,
    backgroundColor: 'green',
    width: 'auto',
    height: 'auto',
  },
  fourthPart:{
    flex: 1,
    backgroundColor: 'brown',
    width: 'auto',
    height: 'auto',
  },
  gameBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer:{
    flex: 1,
    maxHeight: 50,
    backgroundColor: 'black',
    
  },
  player1: {
    flex: 2,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    textAlignVertical: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default styles;
