//Тема: Drag'n'Drop с событиями мыши

//1. Выбор элементов:
const dragElement = document.getElementById('dragElement');
const dropzone = document.getElementById('dropzone');

//2. Событие dragstart для перетаскиваемого элемента:
dragElement.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.dragInfo);
});

//3. Событие dragover для зоны бросания:
dropzone.addEventListener('dragover', function(event) {
  event.preventDefault();
});

//4. Событие drop для зоны бросания:
dropzone.addEventListener('drop', function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  dropzone.innerHTML = `Dropped: ${data}`;
});

/*
1. События перетаскивания:

События dragstart и dragend происходят при начале и завершении перетаскивания соответственно.
Событие dragover происходит, когда перетаскиваемый элемент находится над зоной, которая может принять его.
Событие drop происходит, когда перетаскиваемый элемент отпущен над зоной, которая может принять его.

2. Отключение браузерного поведения по умолчанию:
Для успешного использования drag'n'drop часто требуется отключение браузерного поведения по умолчанию с использованием метода event.preventDefault().

3. Свойства данных при перетаскивании:
В событии dragstart можно установить свойство dataTransfer, чтобы передать данные о перетаскиваемом элементе. */