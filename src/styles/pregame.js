import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bg:{
        width: '100%',
        height: '100%',
    },
    main:{
        flex: 1,
    },
    firstContainer:{
        flex: 1,
    },
    secondContainer:{
        flex: 3,
        alignItems: 'center',
    } ,
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    startBtn:{
        backgroundColor:'green',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});
export default styles;