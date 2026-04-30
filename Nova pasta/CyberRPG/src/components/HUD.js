import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HUD = ({ roomName, status }) => {
  return (
    <View style={styles.hudContainer}>
      <View style={styles.infoBox}>
        <Text style={styles.label}>SETOR:</Text>
        <Text style={styles.value}>{roomName}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>STATUS:</Text>
        <Text style={[styles.value, { color: '#007FFF' }]}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hudContainer: {
    position: 'absolute',
    top: 50, // SafeArea
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: '#E5E4E2',
    borderRadius: 4,
  },
  label: { fontSize: 10, color: '#BFC1C2', letterSpacing: 1 },
  value: { fontSize: 14, color: '#E5E4E2', fontWeight: 'bold' },
});

export default HUD;