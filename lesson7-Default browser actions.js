// Тема: Действия браузера по умолчанию

// let link = document.querySelector("#link");
// console.log(link);

// function handleClick(event) {
//   event.preventDefault();
//   console.log("Первый клик");
// }

// link.addEventListener("click", handleClick);


document.getElementById('link').addEventListener('click', function(event) {
    // Отменяем действие браузера по умолчанию (переход по ссылке)
    event.preventDefault();

    // Ваш код, который выполнится вместо перехода по ссылке
    console.log('Второй клик');
})
