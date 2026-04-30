import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>CHROME NEXUS</Text>
      <Text style={styles.subtitle}>SISTEMA DE INTERFACE SORAYAMA</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Exploration')}
      >
        <Text style={styles.buttonText}>INICIAR PROTOCOLO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D', // Fundo profundo
  },
  title: {
    fontSize: 40,
    color: '#E5E4E2', // Platinum
    fontWeight: 'bold',
    letterSpacing: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#BFC1C2', // Chrome
    marginTop: 10,
    marginBottom: 50,
    letterSpacing: 2,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#007FFF', // LED Azure
    borderRadius: 2,
  },
  buttonText: {
    color: '#007FFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default HomeScreen;