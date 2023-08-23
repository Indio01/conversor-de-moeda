import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f1f1f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewInput: {
        padding:20,
        borderRadius: 10,
        height: 60,
        width:300,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
    input: {
        color: '#000',
        fontSize: 18,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
      },
    texto: {
        color: "#fff", 
        textAlign: 'center', 
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elavation: 3,
        backgroundColor: '#373737',
        marginTop: 10,
        height: 60,
        width: 300,
      },
  });