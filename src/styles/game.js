import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main:{
    flex: 3,
  },
  container:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  playerContainer:{
    backgroundColor: 'white',
  },
  container2players : {
    flex: 1,
  },
  container2PlayersRow:{
    flex: 2,
    flexDirection: 'row',
  },
  container3playersAlone:{
    flex: 2,
    // flexDirection: 'row',
  },
  containerMultiplePlayers: {
    flex: 1,
    alignItems: 'stretch',
  },

  firstPart: {
    flex: 2,
    backgroundColor: 'red',
    width: 'auto',
    height: 'auto',
  },
  secondPart: {
    flex: 2,
    backgroundColor: 'deepskyblue',
    width: 'auto',
    height: 'auto',
  },
  thirdPart:{
    flex: 2,
    backgroundColor: 'green',
    width: 'auto',
    height: 'auto',
  },
  fourthPart:{
    flex: 2,
    backgroundColor: 'brown',
    width: 'auto',
    height: 'auto',
  },
  gameBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  gameBtn2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addDeleteBtnContainer1:{
    flex: 1,
    backgroundColor: 'red',
    width: 'auto',
    height: 'auto',
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
  player2:{
    flex: 2,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    transform: [{rotate: '270deg'}],
  },
  text: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  imageLeftRight: {
    width: 50,
    height: 50,
    transform: [{rotate: '90deg'}],
  },
  imageTopBot:{
    width: 50,
    height: 50,
  }
});
export default styles;
