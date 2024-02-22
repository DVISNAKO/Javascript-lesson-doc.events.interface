//Тема: Движение мыши: mouseover/out, mouseenter/leave

let parent = document.querySelector('#parent');
console.log(parent)

/*1. mousemove:
Событие mousemove происходит, когда мышь двигается над элементом.*/

// target.addEventListener('mousemove', function(event) {
//     console.log('Mouse coordinates:', event.clientX, event.clientY);
//   });


/* 2. mouseover и mouseout:

Событие mouseover происходит, когда указатель мыши переходит на элемент или его дочерние элементы.
Событие mouseout происходит, когда указатель мыши покидает элемент или его дочерние элементы.
*/

parent.addEventListener('mouseover', function() {
    console.log('Mouse over the element!');
  });
  
parent.addEventListener('mouseout', function() {
    console.log('Mouse out of the element!');
  });


/*3. mouseenter и mouseleave:

Событие mouseenter происходит, когда указатель мыши входит в элемент (не включая его дочерние элементы).
Событие mouseleave происходит, когда указатель мыши покидает элемент (не включая его дочерние элементы).
*/

// parent.addEventListener('mouseenter', function() {
//     console.log('Mouse entered the element!');
//   });
  
// parent.addEventListener('mouseleave', function() {
//     console.log('Mouse left the element!');
//   });