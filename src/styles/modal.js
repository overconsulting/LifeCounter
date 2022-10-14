import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      topView:{
        flex: 1,
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '180deg'}],
      },
      bottomView:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',

      },
      rightView: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
      
      },
      leftView:{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: "flex-end",
        // transform: [{rotate: '90deg'}],
      },
      playerContainer:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        // backgroundColor: 'white',
        padding: 40,
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
        transform: [{rotate: '90deg'}],
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
      },
      modalX:{
        alignItems: 'flex-end',
      },
      modalXText:{
          color: 'grey',
          fontSize: 20,
      },
      modalPlayerName:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
});

export default styles;