const toggleBtn = document.querySelector('.toggleBtn');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', containerToggle);

function containerToggle() {
  container.classList.toggle('active');
}