// Все робити за допомоги js.

// - створити блок,
let div1 = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.width = '300px';
div1.style.height = '50px';
div1.style.backgroundColor = 'cornflowerblue';
div1.style.border = '3px solid blue';
div1.style.borderRadius = '10px';
div1.style.margin = '10px';

// - додати цей блок в body.
document.body.appendChild(div1);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div1.cloneNode(true));

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let course of coursesAndDurationArray) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('course');
    newDiv.innerText = course.title +'\n'+ 'Duration - ' + course.monthDuration + ' month.';
    document.body.appendChild(newDiv);
}





// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let course of coursesAndDurationArray) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('course1');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = course.title;
    p.innerText = 'Duration - ' + course.monthDuration + ' month.';
    newDiv.appendChild(h1);
    newDiv.appendChild(p);
    document.body.appendChild(newDiv);
}