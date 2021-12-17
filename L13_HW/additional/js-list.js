// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let wrap = document.getElementsByClassName('wrap')[0];
let list = JSON.parse(localStorage.getItem('list')) || [];
let deb = 0;

for (let e of list) {
    let card = document.createElement('form');
    card.setAttribute('name', 'card');
    card.classList.add('card');

    let imgWrap = document.createElement('div');
    imgWrap.classList.add('imgWrap');

    let img = document.createElement('img');
    img.classList.add('img');
    img.src = e.img;

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = `<b> ${e.name} <b>`;

    let price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = `<b> ${e.price} <b> грн`;
    deb += +e.price
    document.getElementsByClassName('bye')[0].innerText = `Купити: ${deb} грн.`

    let addB = document.createElement('a');
    addB.classList.add('addB');
    addB.href = "#";
    addB.innerHTML = `Видалити з кошика`;

    imgWrap.appendChild(img)
    card.append(imgWrap, name, price, addB);
    wrap.appendChild(card);

    addB.onclick = () => {
        list = list.filter(p => p.id !== e.id);
        localStorage.setItem('list', JSON.stringify(list));
        location.reload()
    }
}


document.getElementById('clear').onclick = () => {
    list = [];
    localStorage.clear();
    location.reload()
}