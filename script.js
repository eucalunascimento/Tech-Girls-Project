// Armazena os dados dos perfis carregados via JSON
let dadosGrupos = {};

// Avatar padrão (SVG em Data URI) para resiliência visual caso falhe a foto
const AVATAR_PADRAO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B2189'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-3.8-1.04-4.83-2.61.03-1.6 3.22-2.48 4.83-2.48 1.6 0 4.8.88 4.83 2.48C15.8 18.96 14.03 20 12 20z'/%3E%3C/svg%3E";

const botoesGrupo = document.querySelectorAll('.projeto-card-btn');
const painelIntegrantes = document.getElementById('painel-integrantes');

// Função de pré-formatação segura de URLs
function formatarUrl(url) {
  if (!url) return null;
  return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
}

// Carrega os dados assincronamente a partir do perfis.json
async function carregarDadosPerfis() {
  try {
    const resposta = await fetch('perfis.json');
    if (!resposta.ok) throw new Error('Erro ao carregar ficheiro JSON de perfis.');
    dadosGrupos = await resposta.json();
  } catch (erro) {
    console.error("Erro na inicialização:", erro);
  }
}

// Inicialização dos eventos dos botões
botoesGrupo.forEach(botao => {
  botao.addEventListener('click', () => {
    const chaveGrupo = botao.getAttribute('data-grupo');
    const grupo = dadosGrupos[chaveGrupo];

    // Atualiza os estados ARIA e a classe ativa
    botoesGrupo.forEach(b => {
      b.classList.remove('ativo');
      b.setAttribute('aria-expanded', 'false');
    });

    botao.classList.add('ativo');
    botao.setAttribute('aria-expanded', 'true');

    if (grupo) {
      let htmlConteudo = `
        <div class="cabecalho-painel-grupo">
          <h3 class="titulo-grupo-selecionado">Integrantes — ${grupo.nomeGrupo}</h3>
          ${grupo.linkProjeto ? `
            <a href="${formatarUrl(grupo.linkProjeto)}" target="_blank" rel="noopener noreferrer" class="btn-link-projeto">
              Acessar Projeto do Grupo ↗
            </a>
          ` : ''}
        </div>
        <div class="integrantes-grid">
      `;

      grupo.integrantes.forEach(membro => {
        const fotoUrl = membro.foto && membro.foto.trim() !== "" ? membro.foto : AVATAR_PADRAO;
        const linkLinkedin = formatarUrl(membro.linkedin);
        const linkGithub = formatarUrl(membro.github);

        htmlConteudo += `
          <article class="integrante-card">
            <div class="avatar-container">
              <img 
                src="${fotoUrl}" 
                alt="Foto de perfil de ${membro.nome}" 
                class="avatar-foto"
                onerror="this.onerror=null; this.src='${AVATAR_PADRAO}';"
              >
            </div>
            <h4>${membro.nome}</h4>
            <span class="especialidade-tag">${membro.especialidade}</span>
            <div class="links-integrante">
              ${linkLinkedin ? `<a href="${linkLinkedin}" target="_blank" rel="noopener noreferrer" class="link-perfil" aria-label="LinkedIn de ${membro.nome}">LinkedIn</a>` : ''}
              ${linkGithub ? `<a href="${linkGithub}" target="_blank" rel="noopener noreferrer" class="link-perfil" aria-label="GitHub de ${membro.nome}">GitHub</a>` : ''}
            </div>
          </article>
        `;
      });

      htmlConteudo += `</div>`;

      painelIntegrantes.innerHTML = htmlConteudo;
      painelIntegrantes.classList.remove('escondido');
      painelIntegrantes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Executa o carregamento dos perfis ao iniciar a aplicação
carregarDadosPerfis();