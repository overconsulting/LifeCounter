import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bg:{
        width: '100%',
        height: '100%',
    },
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        colors: 'white'
    },
    gameBtn:{
        backgroundColor:'red',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default styles;