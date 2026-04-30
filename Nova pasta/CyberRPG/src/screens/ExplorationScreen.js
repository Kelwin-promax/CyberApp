import React, { useEffect, useState } from 'react';
import { View, ImageBackground, ActivityIndicator, StyleSheet, Alert, Text } from 'react-native';
import api from '../services/api';
import Hotspot from '../components/Hotspot';
import HUD from '../components/HUD';

const ExplorationScreen = () => {
  const [scene, setScene] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [status, setStatus] = useState("EXPLORANDO");

  const handleCollect = (item) => {
    setInventory([...inventory, item]);
    setStatus(`COLETADO: ${item.name}`);
    setTimeout(() => setStatus("EXPLORANDO"), 2000);
    Alert.alert("Sucesso", `${item.name} foi adicionado ao seu inventário.`);
  };

  useEffect(() => {
    // Buscamos a lista completa para evitar erros de ID rígidos
    api.get('/scene') 
  .then(response => {
    if (Array.isArray(response.data) && response.data.length > 0) {
      setScene(response.data[0]); 
    } else {
      Alert.alert("Aviso", "Nenhum cenário cadastrado no servidor.");
    }
    setLoading(false);
  })
      .catch(error => {
        // Log detalhado no terminal para facilitar o debug
        console.log("Erro na requisição:", error.response?.data || error.message);
        Alert.alert("Erro", "Falha na comunicação com o sistema Nexus.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007FFF" />
      </View>
    );
  }

  // Proteção contra estados nulos
  if (!scene) {
    return (
      <View style={styles.center}>
        <Text style={{ color: '#E5E4E2' }}>Falha ao inicializar o setor.</Text>
      </View>
    );
  }

  return (
    <ImageBackground 
      source={{ uri: scene.background }} 
      style={styles.container}
      resizeMode="cover"
    >
      <HUD roomName={scene.room_name || "DESCONHECIDO"} status={status} />

      {/* Uso de ?. para evitar crash se o array estiver vazio ou nulo */}
      {scene.interactive_elements?.map((element) => (
        <Hotspot
          key={element.id}
          position={element.position}
          onPress={() => handleCollect(element)}
        />
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0D0D0D' },
});

export default ExplorationScreen;