// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber) {
      navigation.navigate('OTPScreen', { phoneNumber });
    } else {
      console.log('Enter a valid phone number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EFEFEF' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333' },
//   input: { width: '100%', height: 50, borderColor: '#ddd', borderWidth: 1, borderRadius: 10, paddingHorizontal: 15, fontSize: 16, backgroundColor: '#fff', marginBottom: 20 },
//   button: { width: '100%', height: 50, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
// });

export default LoginScreen;
