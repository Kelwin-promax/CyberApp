import axios from 'axios';

const api = axios.create({
  baseURL: 'https://image.pollinations.ai/',
  timeout: 10000, // 10 segundos de limite
});

// Interceptor para logs ou tratamento global (opcional mas recomendado)
api.interceptors.response.use(
  response => response,
  error => {
    // Aqui você trata erros de conexão de forma global
    console.error("Erro na comunicação com o Nexus:", error.message);
    return Promise.reject(error);
  }
);

const chromeSubjects = [
  'silver chrome cybernetic woman',
  'platinum android woman',
  'mirror polished robotic woman',
  'metallic futuristic female cyborg',
  'chrome armored woman',
];

const sceneDetails = [
  'neon blue rim light',
  'black cyberpunk laboratory background',
  'reflective liquid metal skin',
  'sleek retro futuristic fashion',
  'high contrast studio lighting',
  'glossy chrome surfaces',
];

const pickRandom = items => items[Math.floor(Math.random() * items.length)];

const buildPrompt = () => [
  pickRandom(chromeSubjects),
  pickRandom(sceneDetails),
  pickRandom(sceneDetails),
  'portrait composition',
  'cinematic sci fi concept art',
  'elegant non explicit character design',
  'sharp focus',
].join(', ');

export const getRandomWoman = async () => {
  const seed = Date.now();
  const prompt = buildPrompt();
  const imagePath = `prompt/${encodeURIComponent(prompt)}`;
  const imageUrl = api.getUri({
    url: imagePath,
    params: {
      width: 720,
      height: 1280,
      seed,
      model: 'flux',
      nologo: true,
      enhance: true,
      safe: true,
    },
  });

  return {
    id: String(seed),
    name: 'UNIDADE CROMADA',
    location: 'NEXUS DE PRATA',
    imageUrl,
  };
};

export default api;
