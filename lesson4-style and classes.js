//Тема: Стили и классы

let elem = document.querySelector('.child');
console.log(elem);
// //1. поменять стиль
// elem.style.background = 'green';

//2. добавить множество стилей
// let allElem = document.querySelectorAll('.child');
// allElem.forEach(element => {
//     element.style.cssText = `
//       background: pink;
//       opacity: 0.7; 
//       color: yellow;
//       font-size: 24px;
//     `;
//   });
// console.log(allElem);

/* 3. Для свойств из нескольких слов используется camelCase:
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
*/

// 4. убрать стиль
// elem.style.display = 'none';
// setTimeout(() => elem.style.display = '', 2000);

// console.log(elem.className);

// добавить класс
elem.classList.add('newClass');
console.log(elem.className);

/*
Методы classList:

elem.classList.add/remove("class") – добавить/удалить класс.
elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
*/
// когда нет добавит
elem.classList.toggle("width");
console.log(elem.className);

//когда есть уберет
elem.classList.toggle("width");
console.log(elem.className);
