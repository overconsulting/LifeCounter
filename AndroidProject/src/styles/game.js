import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstPart: {
    flex: 1,
    backgroundColor: 'red',
  },
  secondPart: {
    flex: 1,
    backgroundColor: 'deepskyblue',
  },
  gameBtn1: {
    flex: 1,
  },
  gameBtn2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  image: {
    width: 60,
    height: 60,

  },
});
export default styles;
