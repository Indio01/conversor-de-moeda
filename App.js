import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] = useState('')

  const buscarHandle= () =>{
    let URL = `https://economia.awesomeapi.com.br/last/USD-BRL`
    setValorConvertido(URL);
  }

  const limparResultado(){
    setValorConvertido('')
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Moeda 1</Text>
        <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>

      <View>
        <Text>Moeda 2</Text>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>

      <View>
          <Pressable style={styles.botao}>
              <Text>Buscar Valor</Text>
          </Pressable>
      </View>

      <View>
          <Text>Resultado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 2,
    width: 200,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
});
