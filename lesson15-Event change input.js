//Тема: События: change, input, cut, copy, paste

// Событие change срабатывает, когда элемент <input>, <select>, или <textarea> изменяется и затем теряет фокус
//Также, оно не срабатывает при каждом изменении, а только при потере фокуса.

let inputField = document.querySelector('#target');

inputField.addEventListener('change', function(event) {
    console.log('Значение change: ' + event.target.value);
    console.log("Потеря фокуса")
  });

inputField.addEventListener('input', function(event){
  console.log('Значание input' +': '+ event.target.value)
})

//=====

  // Обработчик события cut
  inputField.addEventListener('cut', function(event) {
    console.log('Текст был вырезан');
  });

  // Обработчик события copy
  inputField.addEventListener('copy', function(event) {
    console.log('Текст был скопирован');
    event.clipboardData; 
  });

  // Обработчик события paste
  inputField.addEventListener('paste', function(event) {
    console.log('Текст был вставлен');
  });


  //==== Тема: Отправка формы: событие и метод submit

  const form = document.getElementById('form1');

  form.addEventListener('submit', function (event) {
    // Предотвращаем стандартное поведение отправки формы
    event.preventDefault();

    // Добавляем обработку данных формы
    handleFormData();
  });

  function handleFormData() {
    // Обработка данных формы
    console.log('Форма отправлена!');
  }

  const usernameInput = form.elements.username;
  console.log(usernameInput.value); // Выводит 'John'

  //Чтобы отправить форму на сервер вручную, мы можем вызвать метод form.submit().