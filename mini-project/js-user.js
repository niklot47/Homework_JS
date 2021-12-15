// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


let wrap = document.getElementsByClassName('index__users-wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (let user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('index__user');
            let userImg = document.createElement('img');
            userImg.src = 'img/user.png';
            userImg.classList.add('index__user-img');
            let userInfo = document.createElement('div');
            userInfo.classList.add('index__user-info');
            userInfo.innerText = `User id: ${user.id}. User name: ${user.name}`
            let userPanel = document.createElement('div');
            userPanel.classList.add('index__user-panel');
            let userDetails = document.createElement('button');
            userDetails.classList.add('index__user-details');
            userDetails.innerText = 'Details'
            userPanel.appendChild(userDetails);
            userInfo.appendChild(userPanel);
            userDiv.append(userImg,userInfo);
            wrap.appendChild(userDiv);

            userDetails.onclick = ()=>{
                sessionStorage.setItem('userDetails', JSON.stringify(user));
                document.location.href = "user-details.html";
            }
        }
    })