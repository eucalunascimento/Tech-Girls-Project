# 💜 Tech Girls — Hub Web de Portfólios & Comunidade

> Plataforma web moderna, responsiva e acessível desenvolvida pela comunidade **Tech Girls** para centralizar perfis, frentes de atuação e projetos práticos do grupo.

![Tech Girls Banner](img-techgirls.jpg)

---

## 📌 Sobre o Projeto

O **Tech Girls Hub** funciona como a vitrine oficial da comunidade. Nosso objetivo é criar um espaço onde mulheres na tecnologia — desde estudantes buscando a primeira oportunidade até profissionais seniores — possam se conectar, compartilhar conhecimentos e expor seus projetos.

Este projeto foi desenvolvido durante o **Tech Girls Challenge** (Equipe Noite, Fullstack Web), focando em boas práticas de desenvolvimento front-end, acessibilidade (WCAG) e responsividade do mobile ao desktop.

---

## 🎨 Identidade Visual & Design Tokens (HUB-001)

O projeto adota um sistema centralizado de **Design Tokens** via variáveis CSS (`:root`), garantindo consistência visual, facilitando a manutenção e mantendo um alto contraste para acessibilidade:

- **Roxo Profundo (`#4B2189`)**: Cor primária da marca, utilizada em cabeçalhos, títulos, divisores e botões.
- **Lilás Claro (`#F3EFF8`)**: Tom de fundo do site e contraste suave para elementos visuais.
- **Amarelo Destaque (`#FFC02D`)**: Cor secundária da marca (baseada na logo oficial) utilizada para destacar os subgrupos/frentes de atuação.
- **Branco (`#FFFFFF`)**: Fundo dos cartões para leitura confortável.
- **Tipografia**: Sistema de fontes nativo (`system-ui`) com escala modular para legibilidade.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com uso de tags como `<header>`, `<main>`, `<section>`, `<article>`, `<ul>` e `<footer>`.
- **CSS3 Moderno**: 
  - **Design Tokens** (Variáveis CSS).
  - **Flexbox & CSS Grid**: Layout flexível e grade responsiva para cartões de projetos.
  - **Posicionamento Absoluto & Camadas (`z-index`)**: Banners com cabeçalho flutuante integrado.
- **JavaScript ES6+**: 
  - Manipulação dinâmica do DOM para renderização dos painéis de integrantes.
  - Formatação e tratamento automático de URLs externas e links de repositórios.
- **Git & GitHub**: Versionamento de código estruturado com o padrão *Conventional Commits* e gerenciamento via Pull Requests.

---

## 👩‍💻 Contribuições & Divisão de Tarefas

O desenvolvimento do hub foi realizado de forma colaborativa. Abaixo está a divisão das principais contribuições registradas no histórico do repositório:

### 💜 Regina Nascimento (`eurenascimento` / `Regina` / `CL`)
- **Arquitetura & Estrutura Base**: Setup inicial do repositório, configuração do HTML semântico principal e inclusão dos meta tags de viewport.
- **Design System & Estilização (CSS)**:
  - Implementação dos Design Tokens (HUB-001) com fundo lilás claro (`#F3EFF8`) e estruturação do layout geral.
  - Desenvolvimento do cabeçalho flutuante (Top Bar) com logo e efeito pill.
  - Alinhamento de conteúdos à esquerda, criação da linha divisória roxa e destaque visual em bloco para os títulos `<h3>` dos subgrupos.
  - Responsividade com media queries e estilização avançada de botões interativos (estados `:hover` e `:focus-visible`).
- **Interatividade & Lógica (JavaScript - HUB-002 / HUB-003)**:
  - Criação da base de dados dinâmica de grupos e integrantes (`dadosGrupos`).
  - Implementação da lógica de clique nos cards/botões para carregar o painel de integrantes dinamicamente.
  - Tratamento de links externos (GitHub/LinkedIn) e integração de atalhos para os projetos dos grupos.
- **Documentação & Gerenciamento**:
  - Manutenção contínua do `README.md` e realização do merge dos Pull Requests da equipe.

### 🌸 Lane (`Lanee-ai`)
- **Seção de Projetos Práticos**:
  - Implementação dos cards e da estrutura da seção de projetos da comunidade no HTML e CSS.
  - Adição de elementos visuais e ajuste de espaçamentos no título dos projetos.
- **Elementos Visuais e Perfil**:
  - Inclusão, estilização e ajuste de dimensões da foto de criadora/integrante no projeto.
  - Ajustes finos de layout e margens na seção de projetos da comunidade.

---

## 🚀 Funcionalidades & Evolução do Layout

Durante o desenvolvimento do projeto, realizamos melhorias contínuas na estrutura e no visual:

1. **Banners em Largura Total (`100vw`)**: Refatoração da estrutura HTML para exibição do banner hero de ponta a ponta na tela.
2. **Cabeçalho Integrado**: Posicionamento do `<header>` sobre o banner principal com efeito flutuante e cantos arredondados (`border-radius: 37px`).
3. **Destaque em Subgrupos**: Títulos `<h3>` estilizados como badges roxos com texto amarelo para fácil visualização das frentes de atuação.
4. **Painel Interativo de Integrantes**: Integração JS que renderiza dinamicamente as integrantes de cada grupo de trabalho ao clicar nos botões dos projetos.
5. **Grid de Projetos Práticos**: Exibição das frentes de atuação da comunidade (Dev, Dados, Fullstack, QA, Governança e BI) em uma grade adaptável (`repeat(auto-fit, minmax(260px, 1fr))`).
6. **Acessibilidade**: Estruturação semântica, lista de frentes de atuação (`<ul>` / `<li>`), gerenciamento de atributos `aria-expanded`/`aria-controls` e suporte à navegação por teclado.

---

## 📁 Estrutura de Arquivos

```text
tech-girls-hub/
├── img-techgirls.jpg      # Imagem do banner principal e logo oficial
├── mascote.png            # Imagem do mascote da comunidade
├── index.html             # Estrutura semântica e acessível da aplicação
├── style.css              # Estilos, variáveis CSS, componentes e responsividade
├── script.js              # Lógica do painel interativo e dados dos grupos
└── README.md              # Documentação oficial
