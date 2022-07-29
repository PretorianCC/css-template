const rangeValue = document.getElementById('rangeValue');
const range = document.querySelector('.range');

range.addEventListener('mousemove', rangeSlider);

function rangeSlider() {
  rangeValue.innerHTML = range.value;
}