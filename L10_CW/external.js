//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divOne = document.createElement('div');
divOne.innerText = 'Контейнер 1';
divOne.style.margin = '20px';
document.body.appendChild(divOne);
let divTwo = document.createElement('div');
divTwo.innerText = 'Контейнер 2';
divTwo.style.margin = '20px';
document.body.appendChild(divTwo);

let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
divOne.appendChild(formOne);

let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');
divTwo.appendChild(formTwo);

let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'inputOne');

let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'inputTwo');

let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree');

let inputFour = document.createElement('input');
inputFour.setAttribute('name', 'inputFour');

let button = document.createElement('button');
button.innerText = 'OK';

document.body.appendChild(button);

formOne.append(inputOne,inputTwo);
formTwo.append(inputThree,inputFour);


button.addEventListener('click', function (){
    console.log(document.forms.formOne.inputOne.value);
    console.log(document.forms.formOne.inputTwo.value);
    console.log(document.forms.formTwo.inputThree.value);
    console.log(document.forms.formTwo.inputFour.value);
})

let hr = document.createElement('hr');
document.body.appendChild(hr);


//    - Сворити масив не цензцрних слів.
//        Сворити інпут текстового типу.
//        Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//        Перевірку робити при натисканні на кнопку

let mates = ['свиня', 'редиска', 'дурачок']; // тут ваш масив слів ))
let input = document.createElement('input');
let button5 = document.createElement('button');
button5.innerText = 'ПЕРЕВІРКА';
document.body.append(input, button5);

button5.addEventListener('click', function () {
    let valueInput = input.value;

    for (let mate of mates) {
        if (mate === valueInput) {
            alert('Сам такий');
            input.value = '';// очищення строкипісля введення
            return;
        }
    }

    if (valueInput) {
        alert('Молодець, ти чемний!');
        input.value = ''; // очищення строкипісля введення
    }
})
let hr2 = document.createElement('hr');
document.body.appendChild(hr2);




//    - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//        При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let button2 = document.createElement('button');

button2.innerText = 'Створи таблицю';
document.body.append(input1, input2, input3, button2);


button2.addEventListener('click', function () {
    let tr = input1.value;
    let td = input2.value;
    let enterText = input3.value;

    function generationTable(tr, td, inner) {
        let table = document.createElement('table');
        let divTable = document.createElement('div');

        table.style.border = '1px solid red';
        divTable.appendChild(table);
        document.body.appendChild(divTable);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = '1px solid blue';
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid green';
                td.innerText = `${inner}`;
                table.appendChild(tr);
                tr.appendChild(td);
            }
        }
    }
    generationTable(tr, td, enterText);
})








