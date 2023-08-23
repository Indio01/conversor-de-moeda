import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('33.33')

  const buscarHandle= async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    try {
      let page= await fetch(URL)
      let json = await page.json()
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      let valor= parseFloat(valorOriginal)
      setValorConvertido((indice * valor).toFixed(2))    
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  };

  const limparResultado= () => {
    setValorConvertido('')
    setValorOriginal('33.33')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Conversor de Moedas</Text>
      <View>
        <Picker
          style={{height: 50, width: 300, color: "white", backgroundColor: "#373737", borderRadius: 20, marginBottom:10,}}
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
        <Picker
          style={{height: 50, width: 300, color: "white", backgroundColor: "#373737", borderRadius: 5, marginBottom:10,}}
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>

      <View style={styles.viewInput}>
        <TextInput style={styles.input} value={valorOriginal} onChangeText={setValorOriginal} keyboardType='numeric'/>
      </View>

      <View style={styles.item}>
          <Pressable style={styles.botao} onPress={buscarHandle}>
              <Text style={styles.texto}>Buscar Valor</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={limparResultado}>
              <Text style={styles.texto}>Limpar</Text>
          </Pressable>
          <View style={styles.botaoResultado}>
            <Text style={styles.texto}>{`Resultado: ${valorConvertido}`}</Text>
          </View>
      </View>
    </View>
  );
}
