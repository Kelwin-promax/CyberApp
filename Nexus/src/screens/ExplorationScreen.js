import React, { useState, useEffect } from 'react';
import { 
  View, 
  ImageBackground, 
  Image,
  ActivityIndicator, 
  StyleSheet, 
  Alert, 
  Text, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';
import Hotspot from '../components/Hotspot';
import HUD from '../components/HUD';
import { theme } from '../styles/theme';
import { getRandomWoman } from '../services/api';

const ExplorationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("NEXUS ONLINE");
  const [unit, setUnit] = useState(null);
  const backgroundSource = unit?.imageUrl
    ? { uri: unit.imageUrl }
    : require('../assets/splash-icon.png');

  const loadRandomWoman = async () => {
    setLoading(true);
    setStatus("SINC. NOVA UNIDADE");

    try {
      const randomUnit = await getRandomWoman();
      await Image.prefetch(randomUnit.imageUrl);
      setUnit(randomUnit);
      setStatus("EXPLORANDO");
    } catch (error) {
      setStatus("FALHA NO SINAL");
      Alert.alert("Erro de API", "Nao foi possivel gerar a imagem cromada agora. Tente novamente.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomWoman();
  }, []);

  const nextUnit = () => {
    loadRandomWoman();
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      
      <ImageBackground 
        key={unit?.id || 'loading'}
        source={backgroundSource}
        style={styles.container}
        resizeMode="cover"
        onLoadEnd={() => {
          if (unit?.imageUrl) {
            setLoading(false);
          }
        }} // Só tira o loading quando a imagem aparecer
        onError={() => {
          setStatus("FALHA NO LINK");
          setLoading(false);
          Alert.alert("Erro de Link", "A imagem gerada nao carregou. Tente a proxima unidade.");
        }}
      >
        {/* Camada de brilho metálico para o estilo Sorayama */}
        <View style={styles.chromeOverlay} />

        {loading && (
          <View style={styles.innerLoading}>
            <ActivityIndicator size="large" color={theme.colors.azure} />
          </View>
        )}

        <HUD 
          roomName={unit ? unit.name : "CARREGANDO UNIDADE"} 
          status={status} 
        />

        <Hotspot
          position={{ top: "50%", left: "45%" }}
          onPress={() => Alert.alert("Nexus", unit ? `Unidade localizada em ${unit.location}.` : "Dados indisponiveis.")}
        />

        <TouchableOpacity style={styles.navBtn} onPress={nextUnit} disabled={loading}>
          <Text style={styles.navText}>PRÓXIMA UNIDADE →</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#000' },
  container: { flex: 1 },
  chromeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  innerLoading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: { 
    flex: 1, justifyContent: 'center', alignItems: 'center', 
    backgroundColor: theme.colors.background 
  },
  navBtn: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 127, 255, 0.5)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.azure,
  },
  navText: { color: '#FFF', fontWeight: 'bold', fontSize: 10, letterSpacing: 2 }
});

export default ExplorationScreen;
