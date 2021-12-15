// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход
// на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let user = JSON.parse(sessionStorage.getItem('userDetails'));
let detailsUsername = document.getElementsByClassName('details__username')[0];
detailsUsername.innerText = `(id: ${user.id}) ${user.username}`;
let detailsName = document.getElementsByClassName('details__name')[0];
detailsName.innerText = `Name: ${user.name}`;
let detailsPhone = document.getElementsByClassName('details__phone')[0];
detailsPhone.innerText = `Phone: ${user.phone}`;
let detailsEmail = document.getElementsByClassName('details__email')[0];
detailsEmail.innerText = `Email: ${user.email}`;
let detailsWeb = document.getElementsByClassName('web')[0];
detailsWeb.innerText = `${user.website}`;
detailsWeb.href = user.website;

let detailsCity = document.getElementsByClassName('details__city')[0];
detailsCity.innerText = `City: ${user.address.city}`;
let detailsStreet = document.getElementsByClassName('details__street')[0];
detailsStreet.innerText = `Street: ${user.address.street}`;
let detailsSuite = document.getElementsByClassName('details__suite')[0];
detailsSuite.innerText = `Suite: ${user.address.suite}`;
let detailsZipcode = document.getElementsByClassName('details__zipcode')[0];
detailsZipcode.innerText = `Zipcode: ${user.address.zipcode}`;
let detailsGeo = document.getElementsByClassName('details__geo')[0];
detailsGeo.innerText = `Location: ${user.address.geo.lat}lat, ${user.address.geo.lng}lng`;

let detailsCmName = document.getElementsByClassName('details__cm-name')[0];
detailsCmName.innerText = `Company name: ${user.company.name}`;
let detailsBs = document.getElementsByClassName('details__bs')[0];
detailsBs.innerText = `BS: ${user.company.bs}`;
let detailsCatchPhrase = document.getElementsByClassName('details__catchPhrase')[0];
detailsCatchPhrase.innerText = `Catch phrase: ${user.company.catchPhrase}`;

let wrap = document.getElementsByClassName('details__posts')[0];
let showPosts = document.getElementsByClassName('details__show')[0];

showPosts.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/USER_ID/posts'.replace('USER_ID', (''+user.id)))
        .then(response => response.json())
        .then(posts => {
            for (let post of posts) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('details__post');
                let postInfo = document.createElement('div');
                postInfo.classList.add('details__post-info');
                postInfo.innerText = `${post.title}`

                let postDetails = document.createElement('button');
                postDetails.classList.add('details__post-details');
                postDetails.innerText = 'Show all comments'

                postDiv.append(postInfo, postDetails);
                wrap.appendChild(postDiv);

                postDetails.onclick = () => {
                    sessionStorage.setItem('postDetails', JSON.stringify(post));
                    document.location.href = "post-details.html";
                }
            }
        });
    if (wrap.style.display === "none") {
        wrap.style.display = "flex";
        showPosts.innerText = 'Hide all';
    } else {
        wrap.style.display = "none";
        showPosts.innerText = 'Show all post';
    }
}


