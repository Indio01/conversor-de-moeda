import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Picker} from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default function App() {

  const [moedaOrigem, setMoedaOrigem] = useState('')
  const [moedaDestino, setMoedaDestino] = useState('')
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Moeda 1</Text>
        <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <View>
        <Text>Moeda 2</Text>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <View>
          <Pressable style={styles.botao}>
              <Text>Calcular</Text>
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
