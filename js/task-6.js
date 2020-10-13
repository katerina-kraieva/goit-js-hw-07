const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('focus', () => {
  validationInput.classList = null;
});
validationInput.addEventListener('blur', onValidationInput);

function onValidationInput() {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

/*Напиши скрипт, который бы при потере фокуса на инпуте,
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, 
указывается в его атрибуте data-length.
    Если введено подходящее количество,
     то border инпута становится зеленым, 
     если неправильное - красным.

Для добавления стилей, используй CSS-классы 
valid и invalid.*/
