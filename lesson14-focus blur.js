// Тема: Фокусировка: focus/blur

/*Событие focus срабатывает, когда элемент получает фокус (становится активным).
Событие blur срабатывает, когда элемент теряет фокус (перестает быть активным). */

let input = document.getElementById('target');

input.addEventListener('focus', function() {
    console.log('focus')
  });

input.addEventListener('blur', function() {
   console.log('blur')
     input.style.borderColor = 'red';
  });

/* событий focusin и focusout -  могут быть полезными, 
если вам нужно отслеживать фокусировку и разфокусировку вложенных элементов. */

let parent = document.querySelector('#parent');

  parent.addEventListener('focusin', function() {
    console.log('Parent div is focused!');
    parent.style.backgroundColor = 'blue';
  });

  parent.addEventListener('focusout', function() {
    console.log('Parent div lost focus!');
    parent.style.backgroundColor = '';
  });