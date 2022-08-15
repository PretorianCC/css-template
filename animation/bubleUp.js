(function circle() {
  const amount = 100;
  const body = document.querySelector('body');
  let i = 0;
  while(i < amount) {
    const element = document.createElement('i');
    const posX = Math.floor(Math.random() * window.innerWidth);
    const delay = Math.random() * -20;
    const duration = Math.random() * 10;
    const size = Math.random() * 250;
    element.style.width = 10 + size + 'px';
    element.style.height = 10 + size + 'px';
    element.style.left = posX + 'px';
    element.style.animationDelay = delay + 's';
    element.style.animationDuration = 5 + duration + 's';
    element.style.webkitBoxShadow = '0 30px 50px #0002';

    body.appendChild(element);
    i++;
  }
})()
