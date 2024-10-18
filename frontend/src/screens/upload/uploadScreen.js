import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const UploadScreen = () => {
  const [question, setQuestion] = useState('');
  const [videoUri, setVideoUri] = useState(null);

  // Request permissions for Camera and Storage
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);

      if (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('All permissions granted');
      } else {
        Alert.alert('Permissions Error', 'All permissions are required to record video.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    // Request permissions on component mount
    requestPermissions();

    // Fetch question from API
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
    //   const response = await axios.get('YOUR_GET_API_URL');
        const response = {data:{question:
            'This is the question'
        }}
      setQuestion(response.data.question); // assuming response has question field
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleRecordVideo = async () => {
    const options = {
      mediaType: 'video',
      videoQuality: 'high',
      durationLimit: 30, // Limit video length to 30 seconds
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled video recording');
      } else if (response.errorCode) {
        console.error('Video recording error:', response.errorMessage);
        Alert.alert('Error', `Video recording error: ${response.errorMessage}`);
      } else if (response.assets && response.assets[0].uri) {
        console.log('Video URI:', response.assets[0].uri);
        setVideoUri(response.assets[0].uri); // Save the video URI
      } else {
        console.error('Unexpected response:', response);
        Alert.alert('Error', 'Unexpected response from video recording.');
      }
    });
  };

  const handleUploadVideo = async () => {
    if (!videoUri) {
      Alert.alert('No Video', 'Please record a video first!');
      return;
    }

    const formData = new FormData();
    formData.append('video', {
      uri: videoUri,
      type: 'video/mp4', // Adjust this if needed
      name: 'upload_video.mp4',
    });

    try {
        const response ={data: 'vide-sent'}
    //   const response = await axios.post('YOUR_POST_API_URL', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
        // },
    //   }
    // );

      console.log('Video uploaded successfully:', response.data);
      Alert.alert('Success', 'Video uploaded successfully!');
    } catch (error) {
      console.error('Error uploading video:', error);
      Alert.alert('Upload Error', 'Failed to upload video.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {question ? question : 'Fetching question...'}
      </Text>

      {videoUri ? (
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadVideo}>
            <Text style={styles.buttonText}>Upload Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recordAgainButton} onPress={handleRecordVideo}>
            <Text style={styles.buttonText}>Record Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.recordButton} onPress={handleRecordVideo}>
          <Text style={styles.buttonText}>Record Video</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EFEFEF',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  recordButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  recordAgainButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UploadScreen;
