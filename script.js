// Base de Dados dos Grupos e Integrantes (HUB-002)
const dadosGrupos = {
  "dev-dados": {
    nomeGrupo: "Dev e Dados",
    linkProjeto: "https://github.com", // Substitua pelo link do projeto real do grupo
    integrantes: [
      { nome: "Ana Silva", especialidade: "Frontend & React", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "Carla Lima", especialidade: "Data Analysis & Python", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "Beatriz Souze", especialidade: "Backend & SQL", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  },
  "front-automacao": {
    nomeGrupo: "Front e Automação de Dados",
    linkProjeto: "https://github.com",
    integrantes: [
      { nome: "Fernanda Costa", especialidade: "HTML/CSS & JavaScript", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "Juliana Mendes", especialidade: "Automation & Python", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  },
  "fullstack-starter": {
    nomeGrupo: "Fullstack Starter",
    linkProjeto: "https://github.com",
    integrantes: [
      { nome: "Lane", especialidade: "Frontend & JS", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "Vitoria", especialidade: "Fullstack (TS/Python)", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "CL", especialidade: "Frontend & React", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  },
  "gestao-qa": {
    nomeGrupo: "Gestão, QA e Governança",
    linkProjeto: "https://github.com",
    integrantes: [
      { nome: "Mariana Rocha", especialidade: "QA & Testes Automatizados", linkedin: "https://linkedin.com", github: "https://github.com" },
      { nome: "Patricia Alves", especialidade: "Scrum Master & Governança", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  },
  "bi-grupo-a": {
    nomeGrupo: "Análise de Dados e BI (Grupo A)",
    linkProjeto: "https://github.com/Alinezc/Projeto_Analise_Dados_BI",
    integrantes: [
      { nome: "Renata Oliveira", especialidade: "Power BI & Dashboards", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  },
  "etl-grupo-b": {
    nomeGrupo: "Engenharia de Dados (Grupo B)",
    linkProjeto: "https://github.com/girls-dev-br/projeto-etl-crypto",
    integrantes: [
      { nome: "Vanessa Santos", especialidade: "Data Pipelines & ETL", linkedin: "https://linkedin.com", github: "https://github.com" }
    ]
  }
};

// Seleção de elementos do DOM
const botoesGrupo = document.querySelectorAll('.projeto-card-btn');
const painelIntegrantes = document.getElementById('painel-integrantes');

// Função para exibir os integrantes do grupo selecionado
botoesGrupo.forEach(botao => {
  botao.addEventListener('click', () => {
    const chaveGrupo = botao.getAttribute('data-grupo');
    const grupo = dadosGrupos[chaveGrupo];

    // Remove estado ativo de todos os botões
    botoesGrupo.forEach(b => {
      b.classList.remove('ativo');
      b.setAttribute('aria-expanded', 'false');
    });

    // Ativa o botão clicado
    botao.classList.add('ativo');
    botao.setAttribute('aria-expanded', 'true');

    // Monta o HTML do cabeçalho e integrantes do grupo (HUB-003)
    if (grupo) {
      let htmlConteudo = `
        <div class="cabecalho-painel-grupo">
          <h3 class="titulo-grupo-selecionado">Integrantes — ${grupo.nomeGrupo}</h3>
          ${grupo.linkProjeto ? `
            <a href="${grupo.linkProjeto}" target="_blank" rel="noopener noreferrer" class="btn-link-projeto">
              Acessar Projeto do Grupo ↗
            </a>
          ` : ''}
        </div>
        <div class="integrantes-grid">
      `;

      grupo.integrantes.forEach(membro => {
        htmlConteudo += `
          <article class="integrante-card">
            <h4>${membro.nome}</h4>
            <span class="especialidade-tag">${membro.especialidade}</span>
            <div class="links-integrante">
              <a href="${membro.linkedin}" target="_blank" rel="noopener noreferrer" class="link-perfil">LinkedIn</a>
              <a href="${membro.github}" target="_blank" rel="noopener noreferrer" class="link-perfil">GitHub</a>
            </div>
          </article>
        `;
      });

      htmlConteudo += `</div>`;

      painelIntegrantes.innerHTML = htmlConteudo;
      painelIntegrantes.classList.remove('escondido');
      
      // Rola suavemente até o painel
      painelIntegrantes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});
