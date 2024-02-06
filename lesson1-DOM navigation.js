// Тема: Навигация по DOM-элементам
//Пример 1=========
//1.Доступ к дочерним элементам:
//parentNode: Получение родительского элемента.
let parent = document.getElementById('childElement').parentNode;
// console.log(parent);

//childNodes: Получение всех дочерних элементов (включая текстовые узлы).
let children = document.getElementById('parentElement').childNodes;
// console.log(children);


//2.Доступ к элементам на одном уровне:
let next = document.getElementById('currentElement').nextSibling;
// console.log(next)
let prev = document.getElementById('currentElement').previousSibling;


//nextElementSibling и previousElementSibling: Получение следующего 
//и предыдущего соседних элементов (игнорируя текстовые узлы).

let nextElem = document.getElementById('currentElement').nextElementSibling;
let prevElem = document.getElementById('currentElement').previousElementSibling;

//Пример 2=========
//3.Доступ к первому и последнему элементу:
let first = document.getElementById('parentElement').firstChild;
let last = document.getElementById('parentElement').lastChild;

//Пример 3=========
//firstElementChild и lastElementChild: Получение первого и 
//последнего дочернего элемента (игнорируя текстовые узлы).
let firstElem = document.getElementById('parentElement').firstElementChild;
let lastElem = document.getElementById('parentElement').lastElementChild;


//4.Работа с коллекциями:
//getElementsByTagName: Получение коллекции элементов по тегу.
let paragraphs = document.getElementsByTagName('p');

//getElementsByClassName: Получение коллекции элементов по классу.
let elements = document.getElementsByClassName('exampleClass');

//querySelector и querySelectorAll: Получение элемента 
//или коллекции элементов с использованием селекторов CSS.
let element = document.querySelector('#exampleId');
let elements2 = document.querySelectorAll('.exampleClass');

