let modal = document.getElementById('modal-contato');
let openModal = document.getElementById('modal-open');
let closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})
