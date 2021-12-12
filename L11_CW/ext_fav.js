let favoritesKey = 'favorites';
let users = JSON.parse(localStorage.getItem(favoritesKey)) || [];
console.log(users);
let wrap = document.getElementsByClassName('wrap')[0];
users.forEach(user => {
    let card = document.createElement('div');
    card.className = 'user';
    card.classList.add('card')
    let avatar = document.createElement('div');
    avatar.classList.add('avatar');
    let content = document.createElement('div');
    content.innerText = `${user.name[0].toUpperCase()+user.name.slice(1)}, ${user.age} years old\nStatus: ${user.status}`
    card.append(avatar, content,);
    wrap.appendChild(card);
})