const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const startGreeting = output.textContent;

input.addEventListener('input', () => {
  if (input.value !== '') {
    output.textContent = input.value;
  } else {
    output.textContent = startGreeting;
  }
});

/*Напиши скрипт который, при наборе текста в инпуте
input#name-input (событие input), подставляет его
 текущее значение в span#name-output. Если инпут пустой, 
 в спане должна отображаться строка 'незнакомец'.*/
