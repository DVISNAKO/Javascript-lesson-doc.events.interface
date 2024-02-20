//Тема: Делегирование событий

document.querySelector('#parent').addEventListener('click', function(event){
    if (event.target.className  === "child") {
        console.log('Clicked on', event.target.textContent);
    }
})





let parent = document.querySelector('#parent');

class Menu {
    constructor(elem){
        elem.addEventListener('click', this.onClick.bind(this));
    }
    save(){
        console.log('сохранено')
    }
    load(){
        console.log('загружаю')
    }
    search(){
        console.log('ищу')
    }
    onClick(event){
        let action = event.target.dataset.action;
        if(action){
            this[action]();
        }
    /*Это метод класса, который будет вызываться при событии click на элементе. 
    Он использует event.target для определения элемента, 
    на котором произошло событие, и затем использует 
    dataset.action для получения значения атрибута data-action. 
    Если data-action существует, то вызывается соответствующий метод класса 
    (this[action]()) в зависимости от значения data-action. */   
    }
} 

new Menu(parent);