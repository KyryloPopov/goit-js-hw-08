import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');

form.addEventListener('input', throttle(setLocalData, 500));
form.addEventListener('submit', sendData);

function setLocalData() {
  const User = collectUserData();
  localStorage.setItem('feedback-form-state', JSON.stringify(User));
}

getLocalData();

function getLocalData() {
  const localUser = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localUser) {
    form.elements.email.value = localUser.email;
    form.elements.message.value = localUser.message;
    return;
  }
  form.elements.email.value = '';
  form.elements.message.value = '';
}

function collectUserData() {
  return {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
}

function sendData(event) {
  event.preventDefault();
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('Усі поля повинні бути заповнені!');
    return;
  }
  const User = collectUserData();
  console.log(User);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
