console.log('Завдання:');
console.log('Cтворити масив з 5 числових значень:');
let arrInteger = [3, 5, 8, 13, 21];
console.log(arrInteger);


console.log('\n\nЗавдання:');
console.log('Cтворити масив з 5 стічкових значень:');
let stringInteger = ['three', 'red', 'summer', 'monitor', 'fantasy'];
console.log(stringInteger);


console.log('\n\nЗавдання:');
console.log('Cтворити масив з 5 стрічкового, числового та булевого типу:');
let arrMix = [3, 'red', 'summer', true, false];
console.log(arrMix);


console.log('\n\nЗавдання:');
console.log('Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль:');
let newArr = [];
newArr[0] = 'red';
newArr[2] = 'green';
newArr[3] = 'blue';
newArr[5] = 'white';
console.log(newArr);


document.write('<div class="my-task-header"><b>Завдання: </b><p>за допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.<p></div>');
document.write('<div class="my-task-body">');
for (let i = 0; i < 10; i++) {
    document.write('<div class="task1-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quidem repellendus sunt.</div>');
}
document.write('</div>');


document.write('<div class="my-task-header"><b>Завдання: </b><p>за допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом  і індексом всередині.<p></div>');
document.write('<div class="my-task-body">');
for (let i = 0; i < 10; i++) {
    document.write(`<div class="task1-txt">Картка ${i + 1}</div>`);
}
document.write('</div>');


document.write('<div class="my-task-header"><b>Завдання: </b><p>за допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.<p></div>');
document.write('<div class="">');
for (let i = 0; i < 20; i++) {
    document.write(`<h1 class = my-h1>Кошмар СЕО-шника - 20шт h1...</h1>`);
}
document.write('</div>');


document.write('<div class="my-task-header"><b>Завдання: </b><p>допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.<p></div>');
document.write('<div class="">');
for (let i = 21; i <= 41; i++) {
    document.write(`<h1 class = my-h1>Кошмар СЕО-шника номер ${i}...</h1>`);
}
document.write('</div>');


console.log('\n\nЗавдання:');
console.log('Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
let newArr2 = [10, 20, 30, 15, 66, 30, 21, 20, 30, 11];

for (let value of newArr2) {
    console.log(value);
    value += 1;
}

console.log('\n\nЗавдання:');
console.log('cтворити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');
newArr2 = ['cтворити', 'масив', 'з', 'строкрових', 'елементів', 'Вивести', 'в', 'консоль', 'всі', '...'];

for (let value of newArr2) {
    console.log(value);
    value += 1;
}


console.log('\n\nЗавдання:');
console.log('cтворити масив з 10 будь-якого елементів. Вивести в консоль всі його елементи в циклі.');
newArr2 = [11, 54, false, 'строкрових', 'елементів', 'Вивести', true, 'консоль', 168, '...'];

for (let value of newArr2) {
    console.log(value);
    value += 1;
}

console.log('\n\nЗавдання:');
console.log('cтворити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');
newArr2 = [11, 54, false, 'строкрових', 'елементів', 'Вивести', true, 'консоль', 168, '...'];

for (let value of newArr2) {
    if (typeof (value) === 'boolean') {
        console.log(value);
    }
    value += 1;
}


console.log('\n\nЗавдання:');
console.log('cтворити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');
newArr2 = [11, 54, false, 'строкрових', 'елементів', 'Вивести', true, 'консоль', 168, '...'];

for (let value of newArr2) {
    if (typeof (value) === 'number') {
        console.log(value);
    }
    value += 1;
}

console.log('\n\nЗавдання:');
console.log('cтворити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');
newArr2 = [11, 54, false, 'строкрових', 'елементів', 'Вивести', true, 'консоль', 168, '...'];

for (let value of newArr2) {
    if (typeof (value) === 'string') {
        console.log(value);
    }
    value += 1;
}


console.log('\n\nЗавдання:');
console.log('cтворити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');
let newArr3 = [];

newArr3[0] = 'Желание ';
newArr3[1] = 'Ржавый ';
newArr3[2] = 17;
newArr3[3] = 'Рассвет ';
newArr3[4] = 'Печь ';
newArr3[5] = 9;
newArr3[6] = 'Добросердечный';
newArr3[7] = 'Возвращение на Родину';
newArr3[8] = true;
newArr3[9] = 'Грузовой вагон';

for (let value of newArr3) {
    console.log(value);
    value += 1;
}


console.log('\n\nЗавдання:');
console.log('Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write('<div class="my-task-header"><b>Завдання: </b><p>Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write<p></div>');
document.write('<div class="my-task-body jc-sb">');
for (let i = 0; i < 10; i++) {
    document.write(`<div class="task2-txt">Крок ${i}</div>`);
    console.log(`Крок ${i}`);
}
document.write('</div>');




console.log('\n\nЗавдання:');
console.log('Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.write('<div class="my-task-header"><b>Завдання: </b><p>Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write<p></div>');
document.write('<div class="my-task-body jc-sb">');
for (let i = 0; i < 100; i++) {
    document.write(`<div class="task2-txt">Крок ${i}</div>`);
    console.log(`Крок ${i}`);
}
document.write('</div>');



console.log('\n\nЗавдання:');
console.log('Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
document.write('<div class="my-task-header"><b>Завдання: </b><p>Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write<p></div>');
document.write('<div class="my-task-body jc-sb">');
for (let i = 0; i < 100; i=i+2) {
    document.write(`<div class="task2-txt">Крок ${i}</div>`);
    console.log(`Крок ${i}`);
}
document.write('</div>');



console.log('\n\nЗавдання:');
console.log('Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
document.write('<div class="my-task-header"><b>Завдання: </b><p>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write<p></div>');
document.write('<div class="my-task-body jc-sb">');
for (let i = 0; i < 100; i++) {
    if(i%2==''){
        document.write(`<div class="task2-txt">Крок ${i}</div>`);
        console.log(`Крок ${i}`);
    }
}
document.write('</div>');


console.log('\n\nЗавдання:');
console.log('Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
document.write('<div class="my-task-header"><b>Завдання: </b><p>Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write<p></div>');
document.write('<div class="my-task-body jc-sb">');
for (let i = 0; i < 100; i++) {
    if(i%2){
        document.write(`<div class="task2-txt">Крок ${i}</div>`);
        console.log(`Крок ${i}`);
    }
}
document.write('</div>');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write