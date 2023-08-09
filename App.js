import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Moeda 1</Text>
        <View>
          <TextInput/>
        </View>
      </View>

      <View>
        <Text>Moeda 2</Text>
        <View>
          <TextInput/>
        </View>
      </View>

      <View>
          <Pressable>
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
});
