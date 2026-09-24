// Base de Dados dos Grupos e Integrantes (HUB-002)
const dadosGrupos = {
  "dev-dados": {
    nomeGrupo: "Dev e Dados",
    linkProjeto: "https://github.com/AllanaMonteiroDev/dashboard-vendas-atendimento.git",
   
  },
  "front-automacao": {
    nomeGrupo: "Front e Automação de Dados",
    linkProjeto: "https://github.com/LaraCSilva/dashboard-tech-girls.git",
    
  },
  "fullstack-starter": {
    nomeGrupo: "Fullstack Starter",
    linkProjeto: "https://github.com/eurenascimento/Tech-Girls-Project",
   
  },
  
  "bi-grupo-a": {
    nomeGrupo: "Análise de Dados e BI (Grupo A)",
    linkProjeto: "https://github.com/Alinezc/Projeto_Analise_Dados_BI",
  },

  "documentacao-onboarding": {
  nomeGrupo: "Documentação Técnica / Onboarding",
  linkProjeto: "https://github.com/luanapersouzza-cpu/discord-bot-tech-girls/blob/main/docs/documentacao.md"
},
  
  "etl-grupo-b": {
    nomeGrupo: "Engenharia de Dados (Grupo B)",
    linkProjeto: "https://github.com/girls-dev-br/projeto-etl-crypto",
   
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
          <h3 class="titulo-grupo-selecionado">${grupo.nomeGrupo}</h3>
          ${grupo.linkProjeto ? `
            <a href="${grupo.linkProjeto}" target="_blank" rel="noopener noreferrer" class="btn-link-projeto">
              Acessar Projeto do Grupo ↗
            </a>
          ` : ''}
        </div>
      
      `;

      painelIntegrantes.innerHTML = htmlConteudo;
      painelIntegrantes.classList.remove('escondido');
      
      // Rola suavemente até o painel
      painelIntegrantes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});
