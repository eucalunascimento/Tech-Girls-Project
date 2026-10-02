// Feedback visual de navegabilidade nos cards de links
document.addEventListener('DOMContentLoaded', () => {
  const cardsProjeto = document.querySelectorAll('.projeto-card-btn');

  cardsProjeto.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--cor-primaria)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'transparent';
    });
  });
});
