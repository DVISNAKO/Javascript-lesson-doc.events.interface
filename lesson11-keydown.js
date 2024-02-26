//Тема: Клавиатура: keydown и keyup

//keydown (нажатие клавиши), 
//keyup (отпускание клавиши), 
//keypress (нажатие клавиши с генерацией символа).

// document.addEventListener('keydown', function(event) {
//     console.log('Key pressed:', event.key);
//   });

//С помощью метода event.preventDefault() можно отменить действие, 
//которое происходит по умолчанию при нажатии на клавишу.
//=====

//События фокуса: focus (получение фокуса), blur (потеря фокуса).

let inputElement = document.querySelector('#search');
console.log(inputElement);

inputElement.addEventListener('focus', function() {
  console.log('Input is focused!');
});

//Событие change происходит при изменении значения элемента формы (например, при изменении текста в поле ввода).
inputElement.addEventListener('change', function() {
  console.log('Input value changed!');
});