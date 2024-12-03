const left = document.querySelector('.left');
const right = document.querySelector('.right');
window.addEventListener('scroll', () => {
  const value = window.scrollY / 10;
  left.style.borderBottomRightRadius = `${value}%`;
  right.style.borderBottomLeftRadius = `${value}%`;
})