import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const HUD = ({ roomName, status }) => (
  <View style={styles.hudContainer}>
    <View style={styles.infoBox}>
      <Text style={styles.label}>SETOR</Text>
      <Text style={styles.value} numberOfLines={1}>{roomName || "---"}</Text>
    </View>
    <View style={[styles.infoBox, { alignItems: 'flex-end' }]}>
      <Text style={styles.label}>STATUS</Text>
      <Text style={[styles.value, { color: theme.colors.azure }]} numberOfLines={1}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  hudContainer: {
    position: 'absolute',
    top: 50, left: 20, right: 20,
    flexDirection: 'row', justifyContent: 'space-between',
    padding: 12, backgroundColor: 'rgba(13, 13, 13, 0.8)',
    borderLeftWidth: 4, borderLeftColor: theme.colors.azure,
    borderWidth: 1, borderColor: 'rgba(229, 228, 226, 0.2)', borderRadius: 4,
  },
  label: { fontSize: 10, color: theme.colors.chrome, letterSpacing: 1 },
  value: { fontSize: 13, color: theme.colors.platinum, fontWeight: 'bold' },
});

export default HUD;