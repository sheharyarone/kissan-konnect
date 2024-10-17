import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const SearchScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState('');

  const handleRecordToggle = async () => {
    if (!isRecording) {
      try {
        const result = await audioRecorderPlayer.startRecorder();
        setIsRecording(true);
        console.log('Recording started:', result);
      } catch (error) {
        console.error('Recording error:', error);
      }
    } else {
      try {
        const result = await audioRecorderPlayer.stopRecorder();
        setRecordedAudio(result);
        setIsRecording(false);
        console.log('Recording stopped:', result);
      } catch (error) {
        console.error('Stopping recording error:', error);
      }
    }
  };

  const handlePlayback = async () => {
    if (recordedAudio) {
      try {
        await audioRecorderPlayer.startPlayer(recordedAudio);
        console.log('Playing audio:', recordedAudio);
      } catch (error) {
        console.error('Playback error:', error);
      }
    }
  };

  const handleSendAudio = () => {
    console.log('Audio sent to API:', recordedAudio);
    // Implement your API call here
  };

  const handleRecordAgain = () => {
    setRecordedAudio('');
    setIsRecording(false); // Reset the recording state to false
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Search</Text>

      <TouchableOpacity style={styles.recordButton} onPress={handleRecordToggle}>
        <Text style={styles.recordText}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>

      {recordedAudio && (
        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.controlButton} onPress={handlePlayback}>
            <Text style={styles.controlButtonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={handleSendAudio}>
            <Text style={styles.controlButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={handleRecordAgain}>
            <Text style={styles.controlButtonText}>Record Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EFEFEF' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  recordButton: {
    padding: 20,
    backgroundColor: '#FF6347',
    borderRadius: 10,
    marginBottom: 20,
  },
  recordText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  controlContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 },
  controlButton: { padding: 15, backgroundColor: '#4CAF50', borderRadius: 10, flex: 1, marginHorizontal: 5 },
  controlButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

export default SearchScreen;
