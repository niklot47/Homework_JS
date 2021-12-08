// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener('click',e => console.log(e.target))
document.addEventListener('click', e => {
    let classes = '';
    for (let classListElement of e.target.classList) {
        classes = classes.concat('   ' + classListElement + '\n');
    }
    let size = '' + e.target.offsetWidth + ' x ' + e.target.clientHeight;
    console.log('Tag: ' + e.target.tagName + ((classes === '') ? '' : ("\nClasses: \n" + classes)) + (e.target.id ? ('\nID: ' + e.target.id) : '') + '\nSize: ' + size);
})


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить v (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let popup = document.createElement('div');
popup.classList.add('b-popup');
let popupClose = document.createElement('div');
popupClose.classList.add('popupClose');
popupClose.innerText = '[x]'
popup.appendChild(popupClose);
let popupText = document.createElement('div');
popup.appendChild(popupText);
document.body.appendChild(popup);

document.addEventListener('click', e => {
    if (e.target.classList[0] === 'popupClose') {
        popup.style.display = 'none';
    } else {
        e.target.style.border = 'border: 1px solid red'
        let classes = '';
        for (let classListElement of e.target.classList) {
            classes = classes.concat('   ' + classListElement + '\n');
        }
        let size = '' + e.target.offsetWidth + ' x ' + e.target.clientHeight;
        popup.style.display = 'block';
        popup.style.top = e.clientY+ 15+ 'px';
        popup.style.left = e.clientX +15+ 'px';
        popupText.innerText = 'Tag: ' + e.target.tagName + ((classes === '') ? '' : ("\nClasses: \n" + classes)) + (e.target.id ? ('\nID: ' + e.target.id) : '') + '\nSize: ' + size;
    }
})

// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


let tblHeader = document.createElement('div');
tblHeader.classList.add("tblHeader");

let checkbox1 = document.createElement('input');
checkbox1.setAttribute('type', 'checkbox');
checkbox1.classList.add("checkbox1");

let input1 = document.createElement('span');
input1.classList.add("span");
input1.innerText = 'Status true'

let checkbox2 = document.createElement('input');
checkbox2.setAttribute('type', 'checkbox');
checkbox2.classList.add("checkbox2");

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.classList.add("input2");
input2.value ='29'

let checkbox3 = document.createElement('input');
checkbox3.setAttribute('type', 'checkbox');
checkbox3.classList.add("checkbox3");

let input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.classList.add("input3");
input3.value = 'Kyiv';

let tblContent = document.createElement('div');
tblContent.classList.add("tblContent");

let toDo = ()=>{
    let arr = usersWithAddress;
    tblContent.innerText = '';
    if (checkbox1.checked) {
        arr = arr.filter(a => a.status)
    }
    if (checkbox2.checked) {
        arr = arr.filter(a => a.age > +input2.value)
    }
    if (checkbox3.checked) {
        arr = arr.filter(a => a.address.city === input3.value)
    }

    for (let user of arr) {
        let row = document.createElement('div');
        row.classList.add('row');
        str = '';
        draw(user);
        row.innerText = str;
        tblContent.appendChild(row);
    }
}

checkbox1.onclick = function (){
    toDo();
}

checkbox2.onclick = function (){
    toDo();
}
checkbox3.onclick = function (){
    toDo();
}
let tbl = document.createElement('div');
tbl.classList.add("tbl");

let str = '';
let draw = function (obj){
    for (let objKey in obj) {
        if (typeof (obj[objKey]) === 'object') {
            draw(obj[objKey])
        }else{
            str = str.concat(objKey+': '+ obj[objKey]+' , ')
        }
    }
}

for (let user of usersWithAddress) {
    let row = document.createElement('div');
    row.classList.add('row');
    str = '';
    draw(user);
    row.innerText = str;
    tblContent.appendChild(row);
}

tbl.append(tblHeader , input1, checkbox1, input2, checkbox2, input3, checkbox3,tblContent);
document.body.appendChild(tbl);




