//Тема: Свойства и методы формы

let form = document.forms.myForm;
console.log(form.name);

let element = form.elements.username;
console.log(element.name);

// let countries = form.elements.country;
// console.log(countries[1].value);

// select.options[2].selected = true;
select.value = 'canada';

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращение стандартного поведения формы
    alert('Form submitted!');
  });



