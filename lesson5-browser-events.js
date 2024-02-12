//Тема: Введение в браузерные события

//addEventListener

//Метод addEventListener позволяет добавлять несколько обработчиков 
//на одно событие одного элемента, например:


let btn = document.querySelector('#btn');
console.log(btn);

function handler1() {
    alert('Спасибо!');
  };

function handler2() {
    alert('Спасибо ещё раз!');
  }

btn.addEventListener('click', handler1);
btn.addEventListener('click', handler2);


