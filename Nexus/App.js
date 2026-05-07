import React from 'react';
import Routes from './src/routes'; 
import { Text, TextInput } from 'react-native';

// Isso trava o tamanho da fonte para ignorar a acessibilidade do Android
if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = { allowFontScaling: false };
}// Importa o index.js que criamos

export default function App() {
  return (
    <Routes />
  );
}