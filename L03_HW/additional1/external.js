console.log('\n\nЗавдання:');
console.log('Створити пустий масив та: a. заповнити його 50 парними числами за допомоги циклу.');
let newArr = [];
for (let i = 0; i < 50; i++) {
    newArr[i] = (i + 1) * 2;
}
console.log(newArr);


console.log('\n\nЗавдання:');
console.log('Створити пустий масив та: b. заповнити його 50 непарними числами за допомоги циклу.');
for (let i = 0; i < 50; i++) {
    newArr[i] = (i + 1) * 2 - 1;
}
console.log(newArr);


console.log('\n\nЗавдання:');
console.log('Створити пустий масив та: c. Заповнити масив 20ма рандомними числами.');
let newArr2 = [];
for (let i = 0; i < 20; i++) {
    newArr2[i] = Math.floor(Math.random() * 1000);
}
console.log(newArr2);


console.log('\n\nЗавдання:');
console.log('Створити пустий масив та: c. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732.');
for (let i = 0; i < 20; i++) {
    newArr2[i] = Math.floor(Math.random() * 724) + 8;
}
console.log(newArr2);


console.log('\n\nЗавдання:');
console.log('Вивести за допомогою console.log кожен третій елемен');
for (let i = 0; i < 20; i++) {
    if ((i - 1) % 3 !== 0 && i != 0) {
        console.log(newArr2[i]);
    }
}


console.log('\n\nЗавдання:');
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.');
for (let i = 0; i < 20; i++) {
    if ((i - 1) % 3 !== 0 && i != 0 && newArr2[i] % 2 === 0) {
        console.log(newArr2[i]);
    }
}

console.log('\n\nЗавдання:');
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив');
let superNewArr = [];
let iterForNewArr = 0;
for (let i = 0; i < 20; i++) {
    if ((i - 1) % 3 !== 0 && i != 0 && newArr2[i] % 2 === 0) {
        console.log(newArr2[i]);
        superNewArr[iterForNewArr] = newArr2[i];
        iterForNewArr++;
    }
}
console.log(superNewArr);


console.log('\n\nЗавдання:');
console.log('Вивести кожен елемент масиву, сусід справа якого є парним');
for (let i = 0; i < 20; i++) {
    if (newArr2[i + 1] % 2 === 0) {
        console.log(newArr2[i]);
    }
}
console.log(newArr2); //вихідний масив


console.log('\n\nЗавдання:');
console.log('Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.');
let priceArr = [100, 250, 50, 168, 120, 345, 188];
let midPrice = 0;
for (let i = 0; i < priceArr.length; i++) {
    midPrice = midPrice + priceArr[i];
}
midPrice = midPrice / priceArr.length
console.log(Math.floor(midPrice * 100) / 100);


console.log('\n\nЗавдання:');
console.log('Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.');
let newArr3 = [];
let newArr4 = [];
for (let i = 0; i < 10; i++) {
    newArr3[i] = Math.floor(Math.random() * 10);
}
console.log(newArr3);
for (let i = 0; i < 10; i++) {
    newArr4[i] = newArr3[i] * 5;
}
console.log(newArr4);


console.log('\n\nЗавдання:');
console.log('Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.');
let newArr5 = [];
let newArr6 = [];
iterForNewArr = 0;
newArr5[0] = 'Желание ';
newArr5[1] = 'Ржавый ';
newArr5[2] = 17;
newArr5[3] = 'Рассвет ';
newArr5[4] = 'Печь ';
newArr5[5] = 9;
newArr5[6] = 'Добросердечный';
newArr5[7] = 'Возвращение на Родину';
newArr5[8] = true;
newArr5[9] = 'Грузовой вагон';
console.log(newArr5);
for (let i = 0; i < 10; i++) {
    if (typeof (newArr5[i]) === 'number') {
        newArr6[iterForNewArr] = newArr5[i];
        iterForNewArr++;
    }
}
console.log(newArr5);
console.log(newArr6);


console.log('\n\nЗавдання:');
console.log('Дано 2 масиви з рівною кількістю об\'єктів. З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id"');
let usersWithCities = [];
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

usersWithCities = usersWithId;
console.log(usersWithCities);
for (let i=0; i<usersWithId.length; i++){
    for (let j=0; j<citiesWithId.length; j++)
    {
        if(citiesWithId[j].user_id === usersWithId[i].id){
            usersWithCities[i].address=citiesWithId[j];
        }
    }
}
console.log(usersWithCities);




console.log('\n\nЗавдання:');
console.log('Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
let newArr7 = [];
for (let i = 0; i < 10; i++) {
    newArr7[i] = Math.floor(Math.random() * 100);
}
console.log(newArr7);
for (let value of newArr7) {
    if(value%2 === 0){
        console.log(value);
    }
}



console.log('\n\nЗавдання:');
console.log('Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
let newArr8 = [];
for (let i = 0; i < 10; i++) {
    newArr8[i]=newArr7[i];
}
console.log(newArr7);
console.log(newArr8);




console.log('\n\nЗавдання:');
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for зібрати всі букви в слово.');
strArr = [ 'a', 'b', 'c']
let myStr = '';
for(let i=0; i < strArr.length; i++){
    myStr = myStr+strArr[i];
}
console.log(myStr);


console.log('\n\nЗавдання:');
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу while зібрати всі букви в слово.');
strArr = [ 'a', 'b', 'c']
myStr = '';
let i =0;
while (i<3)
{
    myStr = myStr+strArr[i];
    i++;
}
console.log(myStr);



console.log('\n\nЗавдання:');
console.log('Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for of зібрати всі букви в слово.');
strArr = [ 'a', 'b', 'c']
myStr = '';
for (let value of strArr) {
    myStr = myStr+value;
}
console.log(myStr);
