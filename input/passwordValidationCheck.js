const pswd = document.getElementById("pswd");
const toggleBtn = document.getElementById("toggleBtn");
const lowerCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const digit = document.getElementById("number");
const specialChar = document.getElementById("special");
const minLength = document.getElementById("length");

pswd.addEventListener('keyup', e => {
  checkPassword(pswd.value);
});

function checkPassword(data) {
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})');

  if (lower.test(data)) {
    lowerCase.classList.add('valid');
  } else {
    lowerCase.classList.remove('valid');
  }
  if (upper.test(data)) {
    upperCase.classList.add('valid');
  } else {
    upperCase.classList.remove('valid');
  }
  if (number.test(data)) {
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
  }
  if (special.test(data)) {
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
  }
  if (length.test(data)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
  }
}

toggleBtn.addEventListener('click', e => {
  if (pswd.type == 'password') {
    pswd.setAttribute('type', 'text');
    toggleBtn.classList.add('hide');
  } else {
    pswd.setAttribute('type', 'password');
    toggleBtn.classList.remove('hide');
  }
});