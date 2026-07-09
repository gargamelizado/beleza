# 🎨 Design System - Beleza & Modelo

## Paleta de Cores Premium

### Cores Primárias
- **Primária (Rosa Terracota)**: `#A86F6F` / `bg-primary-500`
- **Primária Light**: `#C4A5A5` / `bg-primary-300`
- **Primária Dark**: `#8B5A5A` / `bg-primary-700`

### Cores de Fundo
- **Cream (Principal)**: `#FCFAF8` / `bg-cream-50`
- **Sand (Secundário)**: `#F9F5F0` / `bg-cream-100`
- **Claro**: `#F3EBE7` / `bg-cream-200`

### Cores de Texto
- **Texto Escuro**: `#3A3A3A` / `text-text-dark`
- **Texto Médio**: `#8B8B8B` / `text-text-medium`
- **Texto Claro**: `#D0D0D0` / `text-text-light`

### Acentos
- **Warmth (Bege Quente)**: `#E8D4C8` / `bg-sand`
- **Gold (Dourado)**: `#D4AF8F` / `bg-gold`

---

## Tipografia

### Fontes Utilizadas
- **Títulos (H1-H6)**: **Playfair Display** (Serif) - Elegante e clássica
- **Textos Corporativos**: **Montserrat** (Sans-serif) - Moderna e geométrica

### Hierarquia de Tamanhos
```jsx
// Títulos
<h1 className="text-6xl md:text-6xl">    // 60px
<h2 className="text-5xl md:text-5xl">    // 48px
<h3 className="text-2xl md:text-3xl">    // 24-32px

// Textos
<p className="text-lg">                  // 18px
<p className="text-base">                // 16px
<p className="text-sm">                  // 14px
```

---

## Componentes & Classes Customizadas

### Botões
```jsx
// Botão Primário (Preenchido)
<button className="btn-primary">Enviar</button>
// Saída: bg-primary-500, text-white, px-8, py-3, uppercase, tracking-wider

// Botão Secundário (Bordado)
<button className="btn-secondary">Saiba Mais</button>
// Saída: border-primary-500, text-primary-500, hover efeito de preenchimento

// Botão Ghost (Texto)
<button className="btn-ghost">Voltar</button>
// Saída: text-primary-500, uppercase, tracking-wider, hover: text-primary-700
```

### Tipografia
```jsx
// Título de Seção
<h2 className="section-title">Meu Título</h2>
// Saída: font-serif, text-4xl md:text-5xl, font-bold, mb-6

// Subtítulo/Parágrafo
<p className="section-subtitle">Descrição</p>
// Saída: text-lg, text-text-medium, leading-relaxed
```

### Sombras
```jsx
<div className="shadow-soft">Sombra suave</div>
<div className="shadow-subtle">Sombra muito discreta</div>
```

---

## Estrutura de Spacing (Proporção 1.5)

```
section: 6rem      (96px) - Seções principais
section-sm: 3rem   (48px) - Seções secundárias
```

---

## Componentes Criados

### 1. **Topbar** (`src/components/Topbar.jsx`)
Barra superior com aviso de "Frete Grátis" em cor primária

### 2. **Header** (`src/components/Header.jsx`)
Navegação premium com:
- Logo serif à esquerda
- Menu centralizado em uppercase
- Ícones de favorito e carrinho à direita
- Ativo com underline sublinhado na cor primária

### 3. **HeroSection** (`src/components/HeroSection.jsx`)
Seção hero com:
- Texto grande com mistura de normal + itálico
- Dois botões (CTA e secundário)
- 3 ícones com benefícios em linha
- Placeholder para imagem principal (600x600px)

### 4. **BenefitsSection** (`src/components/BenefitsSection.jsx`)
Grid com 3 cards destacando diferenciais

### 5. **CategoriesSection** (`src/components/CategoriesSection.jsx`)
Grid com 6 categorias de serviços + ícone overlay ao hover

### 6. **ContactForm** (`src/components/ContactForm.jsx`)
Formulário com:
- Validação de email regex
- Campos responsivos
- Feedback visual de sucesso/erro

### 7. **TrustSection** (`src/components/TrustSection.jsx`)
Seção de confiança com estatísticas

---

## Como Adicionar Imagens

### Hero Section
1. Abra `src/components/HeroSection.jsx`
2. Procure pela div com `bg-gradient-to-br from-primary-100`
3. Substitua por:
```jsx
<div className="bg-white rounded-lg overflow-hidden">
  <img src="/path/to/image.jpg" alt="Beleza" className="w-full h-full object-cover" />
</div>
```

### Cards de Serviços
Adicione imagem em `src/components/CategoriesSection.jsx` para cada card

---

## Responsividade

- **Mobile**: Base (sm: até 640px)
- **Tablet**: md (768px+)
- **Desktop**: lg (1024px+)

Todos os componentes usam `grid-cols-1` mobile e `md:grid-cols-2/3` desktop

---

## Customização de Cores

Para ajustar os tons:

1. **Edite `tailwind.config.js`** na seção `colors.primary`
2. **Edite `src/index.css`** nas variáveis CSS `:root`

Exemplo para tom mais claro:
```js
// tailwind.config.js
primary: {
  500: '#B89090', // mais claro
  700: '#9E5A5A', // mais claro
}
```

---

## Estrutura de Páginas

- **Home**: Hero + Benefícios + Categorias
- **Services**: Título + Grid de Serviços + Trust + CTA
- **About**: Hero com gradiente + Missão + Valores + CTA
- **Contact**: Hero + Formulário + Info de contato + Redes sociais

---

## Dicas de Uso

✅ Sempre use `font-serif` para títulos
✅ Sempre use `font-montserrat` para texto corporativo
✅ Use `uppercase tracking-wider` para ênfase
✅ Mantenha espaçamento com `py-section` e `py-section-sm`
✅ Use `shadow-soft` para elementos flutuantes
✅ Mescle itálico (`italic`) com normal nos títulos para elegância

---

## Próximos Passos

1. ✨ Adicione imagens de alta qualidade (mínimo 1200x800px)
2. 🎯 Integre com backend para contatos
3. 📊 Adicione Analytics
4. 🔧 Configure SEO meta tags
5. 🌐 Configure domínio customizado
