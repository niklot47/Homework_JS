// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let wrap1 = document.getElementById('wrap1')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const p of posts) {
            console.log(p);
            let post = document.createElement('div');
            let body = document.createElement('div');
            let title = document.createElement('h3');
            post.classList.add('post');
            body.classList.add('body');
            title.classList.add('title');
            body.innerText = p.body;
            title.innerText = 'ID: '+ p.id +' : '+  p.title;

            post.appendChild(title);
            post.appendChild(body);
            wrap1.appendChild(post)
        }
    })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let wrap2 = document.getElementById('wrap2')
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(posts => {
        for (const p of posts) {
            console.log(p);
            let post = document.createElement('div');
            let body = document.createElement('div');
            let id = document.createElement('h3');
            let mail = document.createElement('h3');
            post.classList.add('post');
            body.classList.add('body');
            id.classList.add('title');
            mail.classList.add('mail');
            body.innerText = p.body;
            mail.innerText = 'User email: '+p.email;
            id.innerText = 'PostID: '+p.postId + "   (id: "+p.id+')';

            post.appendChild(id);
            post.appendChild(mail);
            post.appendChild(body);
            wrap2.appendChild(post)
        }
    })