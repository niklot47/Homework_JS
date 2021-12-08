// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn1 = document.createElement('button');
btn1.setAttribute('id', 'btn1');
btn1.innerText = 'Hide'
let text = document.createElement('div');
text.setAttribute('id', 'text');
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, eum fuga modi necessitatibus nihil pariatur quia sed. Assumenda cumque ex expedita ipsam libero maiores natus, numquam quis quos velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, eum fuga modi necessitatibus nihil pariatur quia sed. Assumenda cumque ex expedita ipsam libero maiores natus, numquam quis quos velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, eum fuga modi necessitatibus nihil pariatur quia sed. Assumenda cumque ex expedita ipsam libero maiores natus, numquam quis quos velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, eum fuga modi necessitatibus nihil pariatur quia sed. Assumenda cumque ex expedita ipsam libero maiores natus, numquam quis quos velit.'
btn1.onmouseover = () => {
    btn1.style.borderBottom = 'solid';
    btn1.style.borderRight = 'solid';
}
btn1.onmouseleave = () => {
    btn1.style.borderBottom = 'double';
    btn1.style.borderRight = 'double';
}
btn1.onmousedown = () => {
    btn1.style.background = 'limegreen';
    btn1.style.color = 'black';
}
btn1.onmouseup = () => {
    btn1.style.background = 'none';
    btn1.style.color = 'limegreen';
}
btn1.onclick = () => {
    if (text.style.display != 'none') {
        text.style.display = 'none';
        btn1.innerText = 'Show'
    } else {
        text.style.display = 'block';
        btn1.innerText = 'Hide';
    }
}
document.body.appendChild(btn1);
document.body.appendChild(text);


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.createElement('button');
btn2.setAttribute('id', 'btn1');
btn2.innerText = 'Hide my!'
let toMin = 1
btn2.onmouseover= ()=>{
    btn2.style.marginLeft = ''+Math.floor(Math.random()*800/(1+(toMin++)/10))+'px';
    switch (toMin){
            case (2):
                btn2.innerText = 'No-no-no!'
                break;
            case (3):
                btn2.innerText = 'No God'
                break;
            case (4):
                btn2.innerText = 'Please No!'
                break;
            case (5):
                btn2.innerText = 'Noooooooo!'
                break;
            case (6):
                btn2.innerText = 'Stop it!'
                break;
            case (7):
                btn2.innerText = 'Get some help....'
                toMin = 1;
                break;
        }

    btn2.style.borderBottom = 'solid';
    btn2.style.borderRight = 'solid';
}
btn2.onclick =()=>{
    btn2.style.display = 'none';
}
document.body.appendChild(btn2);
btn2.onmouseleave = () => {
    btn2.style.borderBottom = 'double';
    btn2.style.borderRight = 'double';
}
btn2.onmousedown = () => {
    btn2.style.background = 'limegreen';
    btn2.style.color = 'black';
}
btn2.onmouseup = () => {
    btn2.style.background = 'none';
    btn2.style.color = 'limegreen';
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let task3 = document.createElement('div')
task3.classList.add('task3');
task3.innerText = 'Enter you age ';
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.value = '18';
btn3 = document.createElement('button');
btn3.setAttribute('id', 'btn1');
btn3.innerText = 'Check!'
let p = document.createElement('p');


btn3.onmouseover = () => {
    btn3.style.borderBottom = 'solid';
    btn3.style.borderRight = 'solid';
}
btn3.onmouseleave = () => {
    btn3.style.borderRight = 'double';
}
btn3.onmousedown = () => {
    btn3.style.background = 'limegreen';
    btn3.style.color = 'black';
}
btn3.onmouseup = () => {
    btn3.style.background = 'none';
    btn3.style.color = 'limegreen';
}
btn3.onclick = () => {
    console.log(input);
    p.innerText =  p.innerText + ' \"' + input.value + '\" - ' ;
    if ((+input.value)>=18) {
        p.innerText =  p.innerText + ' okay!   ' ;
    } else {
        p.innerText =  p.innerText + ' not okay!   ' ;
    }
}

task3.appendChild(btn3);
task3.appendChild(input);
task3.appendChild(p)
document.body.appendChild(task3);



// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.createElement('div');
menu.classList.add('menu');
let btn4 = document.createElement('button');
btn4.classList.add('btn4');
let dropdown = document.createElement('div')
dropdown.classList.add('dropdown');
let ul = document.createElement('ul');
for (var i = 0; i < 10; i++) {
  let li = document.createElement('li');
  li.innerText = 'Menu option ' + i;
  ul.appendChild(li);
}

menu.appendChild(btn4);
dropdown.appendChild(ul)
menu.appendChild(dropdown);
document.body.appendChild(menu);
btn4.innerText = 'Menu'
btn4.onclick = ()=>{
  if(dropdown.style.display === 'none'){
  dropdown.style.display = 'flex';
  }else{
    dropdown.style.display = 'none'
  }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
