
// - створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangleArea(height,width) {
    return  height*width;
}
// console.log(rectangleArea(5, 6));



// - створити функцію яка обчислює та повертає площу кола
function circleArea(radius) {
    const PI = 3.14159265359;
    return  radius*radius*PI;
}
// console.log(circleArea(8));


// - створити функцію яка обчислює та повертає площу циліндру
function cylinderArea(radius, height){
    const PI = 3.14159265359;
    return radius*radius*PI*height;
}
// console.log(cylinderArea(8, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayToConsole(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// arrayToConsole(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function addParagraph(string) {
    document.write('<p>'+string+'</p>');
}
addParagraph('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate');
addParagraph('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate');
addParagraph('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulPreview(){
    document.write('<ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>');
}
ulPreview();



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulPreview2(li_count){
    document.write('<ul>');
    for(let i=0; i<li_count; i++) {
        document.write('<li>Lorem ipsum dolor sit amet</li>');
    }
    document.write('</ul>');
}
ulPreview2(5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrToList(array){
    document.write('<ul>');
    for(let i=0; i<array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write('</ul>');
}
let arr = [2,17,'dkf',6,true,31,"kdkdmcm",66,100,false];
arrToList(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjectFromArray(arrayOfObject){
    document.write('<div class="id-card">');
    for(let i=0; i<arrayOfObject.length; i++) {
        document.write('<div class="card">');
        document.write(`<h2>${arrayOfObject[i].name}</h2>`);
        document.write(`<p>Age is - ${arrayOfObject[i].age}, id:${arrayOfObject[i].id}</p>`);
        document.write('</div>');
    }
    document.write('</div>');
}
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        id: 123654,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        id: 654789,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        id: 987321,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        id: 147852,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        id: 369852,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
displayObjectFromArray(simpsons);
