# Chrome Nexus RPG - Sorayama Aesthetic 🤖✨

## 📄 Sobre o Projeto
O **Chrome Nexus** é um MVP de uma aplicação mobile de RPG estilo *Point and Click*. O projeto foi desenvolvido sob uma estética futurista inspirada nas obras de **Hajime Sorayama**, focando em superfícies metálicas, reflexos cromados e uma interface minimalista e tecnológica.

O objetivo técnico é demonstrar o domínio em **React Native**, consumo de **APIs REST** com Axios e uma arquitetura modular escalável.

---

## 🛠️ Tecnologias e Ferramentas
- **Framework:** React Native (Expo)
- **Linguagem:** JavaScript
- **Consumo de API:** Axios
- **Navegação:** React Navigation (Stack)
- **Estilização:** StyleSheet (Custom Chrome Theme)
- **Versionamento:** GitHub com Commits Semânticos (Kelwin-ultra)

---

## 📂 Estrutura de Pastas
A organização segue os princípios de **Clean Architecture simplificada**, garantindo que a lógica de negócio esteja separada da interface.

- `src/assets`: Armazena os backgrounds pré-renderizados em estética prateada e ícones de interface.
- `src/components`: Componentes reutilizáveis como `Hotspot` (pontos de clique) e `ChromeButton`.
- `src/services`: Configuração centralizada do Axios e funções de chamada para a API do jogo.
- `src/screens`: Telas principais (`Home`, `Exploration`, `Inventory`, `Detail`).
- `src/styles`: Temas globais definindo a paleta de cores Platinum (#E5E4E2) e Azure (#007FFF).
- `src/routes`: Gerenciamento da pilha de navegação entre os cenários.

---

## 📝 Requisitos Implementados

### Requisitos Funcionais (RF)
1. **Listagem de Cenários:** Consome via API os dados do ambiente atual.
2. **Sistema Point and Click:** Mapeamento de coordenadas enviadas pela API para interação em tela.
3. **Navegação de Diálogos:** Mudança para tela de detalhes ao interagir com NPCs metálicos.
4. **Persistência de Estado:** Gerenciamento do progresso local do jogador.

### Requisitos Não Funcionais (RNF)
1. **Loading State:** Feedback visual via `ActivityIndicator` durante requisições.
2. **Tratamento de Erros:** Catch de erros do Axios com alertas amigáveis.
3. **Design Responsivo:** Posicionamento absoluto calculado proporcionalmente para diferentes telas.
4. **Safe Area:** Garantia de que a UI não sobreponha a barra de status do Android.

---

## 🚀 Como Executar
1. Clone o repositório: `git clone https://github.com/Kelwin-promax/chrome-nexus-rpg.git`
2. Instale as dependências: `npm install`
3. Inicie o Expo: `npx expo start`
4. Abra o emulador Android via Android Studio.

---
Desenvolvido por **Kelwin Gil Fernandes** no SENAI SP.
