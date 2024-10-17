// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import styles from './style';

const SearchScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState('');

  const handleRecordToggle = () => {
    setIsRecording(!isRecording);

    if (!isRecording) {
      // Start recording logic here (e.g., use react-native-voice or react-native-audio)
      console.log('Recording started...');
    } else {
      // Stop recording logic here
      console.log('Recording stopped...');
    }
  };

  const handleSend = () => {
    // Logic to handle sending the recorded text or audio
    console.log('Sending:', recordedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Search</Text>

      <TouchableOpacity style={styles.recordButton} onPress={handleRecordToggle}>
        <Text style={styles.recordText}>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>

      <View style={styles.recordedTextContainer}>
        <Text style={styles.recordedText}>
          {isRecording ? 'Recording in progress...' : recordedText || 'No recorded input'}
        </Text>
      </View>

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
