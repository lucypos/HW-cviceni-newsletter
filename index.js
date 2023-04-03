
const formular = document.querySelector('form');
const textovePolicko = document.querySelector('input');

textovePolicko.addEventListener('input', function () {
  const value = textovePolicko.value;
  const isValid = value.includes('@');
  if (value === '') {
    textovePolicko.classList.add('ramecek');
  } else if (!isValid) {
	textovePolicko.classList.add('ramecek');
  } else {
    textovePolicko.classList.remove('ramecek');
  }
})