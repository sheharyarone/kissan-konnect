// src/screens/OtpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/actions/authActions';
import styles from './styles';

const OTPScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const handleOtpSubmit = () => {
    // Mock OTP validation logic
    if (otp === '1234') {
      dispatch(loginSuccess());  // Dispatch login action to set isAuthenticated to true
    }
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
