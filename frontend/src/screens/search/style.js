import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EFEFEF' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: 'black' },
    recordButton: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 40,
    },
    recordText: {
      fontSize: 18,
      color: 'black',
      marginTop: 10,
    },
    recordedTextContainer: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
    },
    recordedText: {
      fontSize: 16,
      color: '#333',
    },
    sendButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#2196F3',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    sendButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  });

  export default styles