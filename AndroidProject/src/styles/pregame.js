import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 10,
    },
    textInput:{
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 40,
        fontSize: 20,
        margin: 10,
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
    },
});
export default styles;