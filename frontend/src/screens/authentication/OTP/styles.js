import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 20, 
      backgroundColor: '#EFEFEF' 
    },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 20, 
      color: '#000'  // Changed to black
    },
    subtitle: { 
      fontSize: 16, 
      marginBottom: 30, 
      color: '#000'  // Changed to black
    },
    input: { 
      width: '100%', 
      height: 50, 
      borderColor: '#ddd', 
      borderWidth: 1, 
      borderRadius: 10, 
      paddingHorizontal: 15, 
      fontSize: 16, 
      backgroundColor: '#fff', 
      marginBottom: 20 
    },
    button: { 
      width: '100%', 
      height: 50, 
      backgroundColor: '#4CAF50', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 10 
    },
    buttonText: { 
      color: '#fff', 
      fontSize: 18, 
      fontWeight: 'bold' 
    }
  });
  
export default styles;
