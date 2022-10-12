import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
        color: '#851800',
        borderColor: '#851800'
    },
    buttonContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    text:{
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    //Modal of pregame 
    textColor:{
        color: 'black',
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
    },
    btnColor:{
        borderRadius: 10,
    },
    btn:{
        alignItems: 'flex-end',
    },
    btnText:{
        padding: 15,
        color: 'grey',

    },
    modalPosition:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        width: '50%',
        height: '70%',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    contentView:{
        justifyContent: "center",
        alignItems: "center",
    },
    modalText:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
export default styles;