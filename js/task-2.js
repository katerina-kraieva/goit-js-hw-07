const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
});
document.querySelector('#ingredients').append(...ingredientsList);

// Еще вариант решения, недопиленный
// const listEl = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => {
//   let liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   console.log(liEl);
// });
// listEl.append(...ingredients);

// И еще один, гитхаб не принимает егь из-за каких-то МИМов
// listEl.append(
//   ...ingredients.map(el => {
//     const liEl = document.createElement('li');
//     liEl.textContent = el;
//     return liEl;
//   }),
// );
// console.log(listEl);

/*Напиши скрипт, который для каждого элемента 
массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию 
в список ul.ingredients.
Для создания DOM - узлов используй 
document.createElement().*/
