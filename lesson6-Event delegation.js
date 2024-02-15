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
    }
} 

new Menu(parent);