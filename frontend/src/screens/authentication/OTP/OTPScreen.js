// src/screens/OtpScreen.js
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';


const OTPScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');
  

  const handleOtpSubmit = () => {
    // You can add OTP validation logic here
    console.log(`OTP Entered: ${otp}`);

    // After OTP is validated, navigate to the AppStack
    navigation.replace('AppStack'); // Replace AuthStack with AppStack
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>OTP sent to {phoneNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Submit OTP</Text>
      </TouchableOpacity>
    </View>
  );
};



export default OTPScreen;
