import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      player1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        textAlignVertical: 'center',
      },
      player2:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        //flip the text vertically
        transform: [{rotate: '90deg'}],
        textAlignVertical: 'center',
      },
      playerRight:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        transform: [{rotate: '45deg'}],
        textAlignVertical: 'center',
      }
});

export default styles;