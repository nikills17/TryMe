import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.midView}>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Log-In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.button} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcedec'
  },
  midView: {
    backgroundColor: '#fff',
    elevation: 4,
    width: '80%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20
  },
  button: {
    backgroundColor: '#ff6242',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '80%',
    elevation: 4
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
export default Login