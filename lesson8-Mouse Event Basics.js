// Тема: Основы событий мыши

/*
События мыши:

click: событие происходит при клике на элемент левой кнопкой мыши.
contextmenu: событие происходит при вызове контекстного меню (правый клик).
mousedown: событие происходит при нажатии кнопки мыши.
mouseup: событие происходит при отпускании кнопки мыши.
mousemove: событие происходит при движении мыши над элементом.
Объект события:

Каждое событие мыши передает объект события (event), 
который содержит информацию о событии и элементе, на котором оно произошло.

Координаты мыши:
События mousemove, mousedown и mouseup предоставляют 
координаты мыши в свойствах event.clientX и event.clientY.
*/


let target = document.getElementById('target');
console.log(target)

// target.addEventListener('click', function(event) {
//     console.log('Click event:', event);
//   });

//   target.addEventListener('contextmenu', function(event) {
//     event.preventDefault(); // Предотвращаем появление контекстного меню
//     console.log('Contextmenu event:', event);
//   });

//   target.addEventListener('mousedown', function(event) {
//     console.log('Mousedown event:', event);
//   });

//   target.addEventListener('mouseup', function(event) {
//     console.log('Mouseup event:', event);
//   });

  target.addEventListener('mousemove', function(event) {
    console.log('Mousemove event. Coordinates:', event.clientX, event.clientY);
  });