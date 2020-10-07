const allCategoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${allCategoriesEl.length} категории.`);

allCategoriesEl.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  console.log('Категория: ', categoryName);
  const categoryLenght = category.querySelectorAll('li').length;
  console.log('Количество элементов: ', categoryLenght);
});

// element.firstElementChild.textContent
// element.lastElementChild.children.length
/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет 
и выведет в консоль текст заголовка элемента (тега h2) и 
количество элементов 
в категории (всех вложенных в него элементов li).

Например для первой категории получится:

    Категория: Животные
    Количество элементов: 4*/
