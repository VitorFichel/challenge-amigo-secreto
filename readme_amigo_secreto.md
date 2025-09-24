# 🎁 Amigo Secreto

Uma aplicação web simples e interativa para realizar sorteios de amigo secreto de forma digital. Desenvolvida com HTML, CSS e JavaScript puro.

![Amigo Secreto Banner](assets/amigo-secreto.png)

##  Descrição

O **Amigo Secreto** é uma aplicação que permite aos usuários criar listas de amigos e realizar sorteios aleatórios para determinar quem será o "amigo secreto". Ideal para festas, confraternizações e eventos especiais.

##  Funcionalidades

- ✅ **Adicionar Amigos**: Interface intuitiva para inserir nomes na lista
- ✅ **Validação de Entrada**: Impede nomes vazios e duplicados
- ✅ **Lista Visual**: Exibe todos os participantes em tempo real
- ✅ **Sorteio Aleatório**: Seleção automática e imparcial do amigo secreto
- ✅ **Interface Responsiva**: Design moderno e adaptável
- ✅ **Suporte a Teclado**: Permite adicionar nomes pressionando Enter
- ✅ **Feedback Visual**: Resultado destacado com emojis e formatação

##  Como Usar

### 1. Adicionando Participantes
- Digite o nome de um amigo no campo de texto
- Clique em "Adicionar" ou pressione **Enter**
- O nome aparecerá na lista abaixo do campo
- Repita o processo para todos os participantes

### 2. Realizando o Sorteio
- Certifique-se de ter pelo menos um participante na lista
- Clique no botão "Sortear amigo"
- O resultado aparecerá destacado na tela

### 3. Novo Sorteio
- Para fazer um novo sorteio, basta clicar novamente em "Sortear amigo"
- Para uma nova lista, recarregue a página

##  Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer instalação de dependências adicionais

### Executando Localmente

#### Opção 1: Abertura Direta
```bash
# Clone ou baixe o repositório
git clone [seu-repositorio]
cd amigo-secreto

# Abra o arquivo index.html diretamente no navegador
# Duplo clique no arquivo ou arraste para o navegador
```

#### Opção 2: Servidor Local (Recomendado)
```bash
# Com Python instalado
python -m http.server 8000
# Acesse: http://localhost:8000

# Com Node.js e npx
npx serve .
# Acesse: http://localhost:3000

# Com VS Code + Live Server Extension
# Clique com botão direito em index.html → "Open with Live Server"
```

## 📁 Estrutura do Projeto

```
amigo-secreto/
│
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos e layout responsivo
├── app.js              # Lógica da aplicação em JavaScript
├── README.md           # Documentação do projeto
│
└── assets/
    ├── amigo-secreto.png       # Imagem principal
    └── play_circle_outline.png # Ícone do botão sortear
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com variáveis CSS e Flexbox
- **JavaScript ES6+**: Lógica da aplicação com funções puras
- **Google Fonts**: Tipografia (Inter e Merriweather)

## Funcionalidades Técnicas

### Validações Implementadas
- Campo vazio: Alerta para inserir um nome válido
- Nomes duplicados: Previne a adição do mesmo nome
- Lista vazia: Aviso antes de tentar sortear sem participantes

### Algoritmo de Sorteio
```javascript
// Geração de índice aleatório
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.