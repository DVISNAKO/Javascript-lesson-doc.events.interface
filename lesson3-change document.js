// Тема: Изменение документа

//Создание элемента

let textNode = document.createTextNode('А вот и Я');
// document.body.append(textNode);
//создать div
let div = document.createElement('div');


//записать в div текст
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// div.textContent = "other text";

//поместить на страницу
document.body.append(div);

/*Вот методы для различных вариантов вставки:

before
prepend
0
1
2
append
after

node.append(...nodes or strings) – вставляет в node в конец,
node.prepend(...nodes or strings) – вставляет в node в начало,
node.before(...nodes or strings) – вставляет прямо перед node,
node.after(...nodes or strings) – вставляет сразу после node,
node.replaceWith(...nodes or strings) – заменяет node.
node.remove() – удаляет node.
*/

// document.body.prepend(div);
// document.body.after(div);
document.body.before(div);
// document.body.remove(div);
//===================================================




