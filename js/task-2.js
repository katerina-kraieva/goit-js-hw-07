const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('ul');
listEl.append(
  ...ingredients.map(el => {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    return liEl;
  }),
);
console.log(listEl);

/*Напиши скрипт, который для каждого элемента 
массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию 
в список ul.ingredients.
Для создания DOM - узлов используй 
document.createElement().*/
