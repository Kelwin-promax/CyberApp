import axios from 'axios';

const api = axios.create({
  // Se você for usar o MockAPI, cole a URL aqui. 
  // Caso contrário, pode usar uma URL base fictícia para testar a estrutura.
  baseURL: 'https://69f360a7bd2396bf530fe896.mockapi.io/:endpoint',
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

export default api;