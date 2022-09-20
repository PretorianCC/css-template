const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function() {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
});
