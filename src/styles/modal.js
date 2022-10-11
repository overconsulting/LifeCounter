import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      topView:{
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: '180deg'}],
      },
      bottomView:{
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      rightView: {
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignContent: "flex-end",
        transform: [{rotate: '270deg'}],
      },
      leftView:{
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignContent: "flex-end",
        transform: [{rotate: '90deg'}],
      },
      playerContainer:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
      },
      playerContainer2:{
        justifyContent: "center",
        alignItems: "center",
      },
      player:{
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontSize: 30,
        textAlignVertical: 'center',
      },
      player1: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontSize: 30,
        textAlignVertical: 'center',
        transform:[{rotate: '180deg'}],
      },
      player2:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        transform: [{rotate: '90deg'}],
        textAlignVertical: 'center',
      },
      player3:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        transform: [{rotate: '270deg'}],
        textAlignVertical: 'center',
      },
      playerRight:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        transform: [{rotate: '45deg'}],
        textAlignVertical: 'center',
      },
      text:{
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
      },
      image:{
        width: 50,
        height: 50,
      },
      gameBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      },
      gameBtn2:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnContainer:{
        flexDirection: 'column',
        padding: 10,
      },
      commanderContainer:{
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row'
      }
});

export default styles;