const button = document.getElementById('read-button');

button.addEventListener('click', () => {
  const card = document.querySelector('.card');
  card.classList.toggle('active');
  if(card.classList.contains('active')) {
    return button.textContent = 'Ler Menos';
  } else {
    return button.textContent = 'Ler Mais';
  }
})