const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterSpan = document.querySelector('#value');
let counterValue = 0;
const decrement = function () {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};
decrementBtn.addEventListener('click', () => decrement());

const increment = function () {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};

incrementBtn.addEventListener('click', () => increment());

/*Счетчик состоит из спана и кнопок,
которые должны увеличивать и уменьшать значение счетчика на 1.

    Создай переменную counterValue в которой будет хранится текущее значение счетчика.
    Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/
