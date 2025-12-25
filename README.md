# Portfolio Front-End Developer

Um portfólio moderno e responsivo criado com React e Vite, apresentando seções de apresentação, projetos, habilidades e contato.

## 🚀 Características

- **Design Moderno**: Interface limpa com tema escuro e elegante
- **Responsivo**: Totalmente adaptado para dispositivos móveis e desktop
- **Performance**: Construído com Vite para carregamento rápido
- **Animações Suaves**: Transições e efeitos visuais refinados
- **Formulário de Contato**: Sistema de contato funcional
- **Navegação Suave**: Scroll suave entre seções

## 📋 Seções

1. **Header**: Navegação fixa com links para as seções
2. **Hero**: Seção principal com apresentação impactante
3. **Sobre**: Descrição profissional e background
4. **Projetos**: Galeria de projetos com tags de tecnologias
5. **Habilidades**: Categorização de competências técnicas
6. **Contato**: Formulário de contato e links de redes sociais
7. **Footer**: Rodapé com informações e links sociais

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca de UI
- **Vite**: Ferramenta de build e desenvolvimento
- **CSS3**: Estilização com suporte a Grid e Flexbox
- **JavaScript ES6+**: Sintaxe moderna

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Prévia da build de produção
npm run preview
```

## 🌐 Uso

1. Abra `http://localhost:5173` no seu navegador
2. Navegue através dos links no menu
3. Todos os links internos utilizam scroll suave automático

## 📝 Personalizações

### Alterar Informações Pessoais

Edite os seguintes componentes:

- **Header.jsx**: Nome e links de navegação
- **Hero.jsx**: Título e subtítulo
- **About.jsx**: Descrição profissional
- **Contact.jsx**: Email e redes sociais
- **Footer.jsx**: Links sociais

### Alterar Projetos

Edite o array `projects` em **Projects.jsx**:

```jsx
const projects = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    tags: ['Tech1', 'Tech2'],
    link: '#'
  }
]
```

### Alterar Habilidades

Edite o array `skills` em **Skills.jsx**:

```jsx
const skills = [
  { category: 'Categoria', items: ['Skill1', 'Skill2'] }
]
```

## 🎨 Estrutura de Cores

- **Fundo Primário**: `#0f0f0f` (Preto muito escuro)
- **Fundo Secundário**: `#1a1a1a` (Preto escuro)
- **Destaque**: `#fff` (Branco)
- **Texto Secundário**: `#a0a0a0` (Cinza)

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- Desktop: Layout completo
- Tablet (768px): Ajustes de grid
- Mobile: Single column layout

## 🚢 Deploy

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arraste a pasta 'dist' para o Netlify
```

## 📄 Licença

Este projeto está disponível sob a licença MIT.

## 👤 Autor

Henrique Silva - Desenvolvedor Front-End

---

Criado com ❤️ usando React e Vite
