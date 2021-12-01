// - Є масив.
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let ul = document.getElementsByClassName('menu')[0];
let arr = ['Main','Products','About us','Contacts'];


let li = document.createElement('li');
for (let string of arr) {
    let elem = li.cloneNode();
    elem.innerText = string;
    ul.appendChild(elem);
}