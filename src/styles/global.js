import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    txtRed:{
        color: '#851800'
    },
    txtWhite: {
        color: '#fff'
    },
    main:{
        flex: 1,
    },
    firstContainer:{
        flex: .75,
    },
    secondContainer:{
        flex: 3,
    },
    bg:{
        width: '100%',
        height: '100%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnRed:{
        backgroundColor:'#851800',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marginLeft50: {
        marginLeft: 50,
    },
    marginTop50: {
        marginTop: 50,
    },
    marginBottom50: {
        marginBottom: 50,
    }
});

export default styles;