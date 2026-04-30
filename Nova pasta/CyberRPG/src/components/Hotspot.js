import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

const Hotspot = ({ position, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.hotspot, { top: position.top, left: position.left }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Efeito de anéis concêntricos para parecer um radar futurista */}
      <View style={styles.innerRing} />
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  hotspot: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007FFF', // Azure LED
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 127, 255, 0.1)',
  },
  innerRing: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007FFF',
  }
});

export default Hotspot;