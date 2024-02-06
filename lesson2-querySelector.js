//Тема: Поиск: getElement*, querySelector*

  // получить элемент
//   let elem = document.getElementById('childElement');
// console.log(elem);

//   let getP = document.querySelectorAll('p');
//   console.log(getP);


//   let getOneP = document.querySelector('.elem');
//   console.log(getOneP);


  const parentElement = document.querySelector('.parent');
  console.log(parentElement)

  const firstChildElement = parentElement.querySelector('.child');
  console.log(firstChildElement)