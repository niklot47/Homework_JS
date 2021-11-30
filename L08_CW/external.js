// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює  текст елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let main_header = document.getElementById('main_header');
main_header.innerText = 'sep2021';

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
// ul[0].style.backgroundColor = 'silver';
ul[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (let elem of linkList) {
    // elem.style.backgroundColor = 'cornflowerblue';
    elem.style.width = '50%';
}


// d) отримує текст який зберігається в елементі з класом listElement2
let textFromListElement2;
for (let elem of linkList) {
    // console.log(Array.from(elem.className).filter(a => a === 'listElement2'));
    if (elem.className.indexOf('listElement2') !== -1) {
        // console.log(elem.className);
        textFromListElement2 = elem.textContent;
    }
}
console.log(textFromListElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
// console.log(li);
for (let a of li) {
    a.style.backgroundColor = 'silver';
}


// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (let aEl of a) {
    aEl.classList.add('anchor')
}
console.log(a);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (let aEl of a) {
    if (aEl.textContent === 'link3') {
        aEl.style.fontSize = '40px';
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aEl of a) {
    aEl.classList.add(aEl.textContent)
}
console.log(a);


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header');
let color = prompt('Choose BG color: ', 'red')
for (let se of sub_header) {
    se.style.backgroundColor = color;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
color = prompt('Choose text color: ', 'blue')
for (let se of sub_header) {
    if (se.textContent === 'content 2 segment') {
        se.style.color = color;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому теkст на довільний. Текст отримати з prompt()
let newText  = prompt('Enter text: ', 'asd asd asd qwe qwe qwe');
document.getElementsByClassName('content_1')[0].innerText = newText;

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (let pElement of p) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (let t2 of text2) {
    t2.innerText = 'sep-2021';
}