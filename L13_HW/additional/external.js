// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
//     - назва товару
//     - кількість товару
//     - ціна товару
//     - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let arr = [
    {
        name: 'Щелкунчик',
        count: '20',
        price: '77.25',
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcA_1hZrexLTxq5R74lHb4ivQ1fpmC7xu4pEv7Gs65LNsJP8b74qQaqL4EWn63uc4HkJ1pGORdKhJUoWI5b1a-0xjvYnTSfg&usqp=CAE'
    },
    {
        name: 'Елочные шары',
        count: '10',
        price: '608',
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuYdzJmlJvqd1riE46JNjmetwRJoSYQc_gaZHEPnsqG9Erx-16iOnf3J2R2AKUkRSr60_Vaa3TbXrvM8h8BWziv3EcJCdJYVaho3ftukvA&usqp=CAE'
    },
    {
        name: 'Щелкунчик',
        count: '20',
        price: '77.25',
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcA_1hZrexLTxq5R74lHb4ivQ1fpmC7xu4pEv7Gs65LNsJP8b74qQaqL4EWn63uc4HkJ1pGORdKhJUoWI5b1a-0xjvYnTSfg&usqp=CAE'
    },
    {
        name: 'Елочный Щелкунчик ',
        count: '35',
        price: '303',
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSS6d16motjBeUyGpz8BRJJ6N5xIBL_L-pSnsNWkhJr1XilZNDE-dFDYA1_J5MB2ouTjs4M1Wfm04dpYiqCY7pkLmXCY89hIZk7aKCWyGXb&usqp=CAE'
    },
    {
        name: 'Стеклянный шар',
        count: '51',
        price: '70.01',
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTO7ekq4ucMLTc4-K21lUfQnjN2rNeLQ-30tLk_ILbswQWhHpYjNt0oMJuy2P0J27ZtJew7Xp5azIHJDa5eel3M98MFxR8ZABXyJCeZK6E&usqp=CAE'
    },
    {
        name: 'Подвесной новогодний декора Птички',
        count: '31',
        price: '41.25',
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0sg0kJ5xMgoWZo0-SKniME-WyZYvwd1BPg9HI2VJhRDVwdM2V0GiN0X5GsXdDM0ciB-O_5khEknYFYvEpx5L4MDQhVbSu4qLGKzoouaA&usqp=CAE'
    },
];

let wrap = document.getElementsByClassName('wrap')[0];
for (let a of arr) {
    let card = document.createElement('form');
    card.setAttribute('name', 'card');
    card.classList.add('card');

    let imgWrap = document.createElement('div');
    imgWrap.classList.add('imgWrap');

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = a.img;

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = `<b> ${a.name} <b>`;

    let countP = document.createElement('div');
    countP.classList.add('count');
    countP.innerHTML = `${a.count} у наявності`;

    let price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = `<b> ${a.price} <b> грн`;

    imgWrap.appendChild(img)
    card.append(imgWrap, name, countP, price);
    wrap.appendChild(card);

}

