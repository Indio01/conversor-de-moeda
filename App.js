import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('3.3')

  const buscarHandle= async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    try {
      let page= await fetch(URL)
      let json = await page.json()
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      setValorConvertido(valorOriginal * indice);     
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  };

  const limparResultado= () => {
    setValorConvertido('')
    setValorOriginal('3.3')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  };

  return (
    <View style={styles.container}>
      <Text>Conversor de Moedas</Text>
      <View>
        <Text>Moeda 1</Text>
        <Picker
          style={{height: 50, width: 200,}}
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>

      <View>
        <Text>Moeda 2</Text>
        <Picker
          style={{height: 50, width: 200,}}
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>

      <View>
        <Text>{`Valor em ${moedaOrigem} a ser convertido:`}</Text>
        <TextInput value={valorOriginal} onChangeText={setValorOriginal} keyboardType='numeric'/>
      </View>

      <View>
          <Pressable onPress={buscarHandle}>
              <Text>Buscar Valor</Text>
          </Pressable>
          <Pressable onPress={limparResultado}>
              <Text>Limpar</Text>
          </Pressable>
          <Text>{`Resultado: ${valorConvertido}`}</Text>
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
});
