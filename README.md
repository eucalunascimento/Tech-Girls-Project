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

- **Roxo Profundo (`#4B2189`)**: Cor primária da marca (`--cor-primaria`), utilizada em cabeçalhos, títulos, divisores e botões.
- **Lilás Claro (`#F3EFF8`)**: Tom de fundo do site e contraste suave para elementos visuais.
- **Amarelo Destaque (`#FFC02D`)**: Cor secundária da marca (baseada na logo oficial) utilizada para destacar os subgrupos/frentes de atuação.
- **Branco (`#FFFFFF`)**: Fundo dos cartões para leitura confortável.
- **Tipografia**: Sistema de fontes nativo (`system-ui`) com escala modular para legibilidade.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com uso de tags como `<header>`, `<main>`, `<section>`, `<article>`, `<ul>` e `<footer>`.
- **CSS3 Moderno**: 
  - **Design Tokens** (Variáveis CSS em `:root`).
  - **Flexbox & CSS Grid**: Layout flexível e grade responsiva para cartões de projetos.
  - **Posicionamento Absoluto & Camadas (`z-index`)**: Banners com cabeçalho flutuante integrado.
- **JavaScript ES6+**: 
  - Leitura dinâmica do arquivo JSON (`perfis.json`) e renderização automática dos cartões de perfil no DOM.
  - Formatação e tratamento automático de URLs externas e links de repositórios.
- **Git & GitHub**: Versionamento de código estruturado com o padrão *Conventional Commits* e gerenciamento via Pull Requests.

---

## 💻 Como Rodar o Projeto Localmente (HUB-008)

Para executar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos
- Um navegador web moderno (Google Chrome, Firefox, Edge, Safari, etc.).
- [Git](https://git-scm.com/) instalado em sua máquina.
- (Opcional, mas recomendado) Extensão **Live Server** no VS Code ou um servidor local HTTP simples (devido ao uso de `fetch` para carregar o arquivo `perfis.json`).

### Passo a Passo

1. **Clonar o Repositório**:
   ```bash
   git clone [https://github.com/seu-usuario/tech-girls-hub.git](https://github.com/seu-usuario/tech-girls-hub.git)
