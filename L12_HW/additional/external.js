// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

//let wrap2 = document.getElementsByClassName('posts')[0];


let wrap1 = document.getElementById('accordionBasic')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            // console.log(user);
            let item = document.createElement('div');
            item.classList.add('accordion-item');
            let header = document.createElement('h2');
            header.classList.add('accordion-header');
            header.setAttribute('id', 'heading' + user.id)
            let button = document.createElement('button');
            button.classList.add('accordion-button');
            button.setAttribute('type', 'button')
            button.setAttribute('data-bs-toggle', 'collapse')
            button.setAttribute('data-bs-target', ('#collapse' + user.id))
            button.setAttribute('aria-expanded', 'true')
            button.setAttribute('aria-controls', 'collapse' + user.id)
            button.innerText = 'id: ' + user.id + '. ' + user.name + ' (' + user.username + ')\nemail: ' + user.email + '  website: ' + user.website;

            let collapseOne = document.createElement('div');
            collapseOne.setAttribute('id', 'collapse' + user.id)
            collapseOne.classList.add('accordion-collapse');
            collapseOne.classList.add('collapse');
            if (user.id === 1) collapseOne.classList.add('show');
            collapseOne.setAttribute('aria-labelledby', 'headingOne')
            collapseOne.setAttribute('data-bs-parent', '#accordionBasic')

            let body = document.createElement('div');
            body.classList.add('accordion-body');
            body.innerText = 'Address: ' + '\nCity: ' + user.address.city + '\nStreet: ' + user.address.street + '\nSuite: ' + user.address.suite + '\nGeolocation: ' + user.address.geo.lat + ' ' + user.address.geo.lng + '\n\nCompany: ' + '\nName: ' + user.company.name + '\nCatchPhrase: ' + user.company.catchPhrase + '\nBS: ' + user.company.bs;

            let button2 = document.createElement('button');
            button2.classList.add('btn');
            button2.classList.add('m-3');
            button2.classList.add('btn-primary');
            button2.setAttribute('type', 'button')
            button2.innerText = 'Show all posts'
            let wrap2 = document.createElement('div');

            wrap2.classList.add('wrap2');
            wrap2.classList.add('bg-light');
            wrap2.classList.add('px-3');

            button2.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        wrap2.innerText = '';
                        for (const p of posts) {
                            if (p.userId === user.id) {
                                // console.log(p);
                                let post = document.createElement('div');
                                let body = document.createElement('div');
                                let title = document.createElement('h3');
                                post.classList.add('post');
                                body.classList.add('body');
                                title.classList.add('title');
                                body.innerText = p.body;
                                title.innerText = 'ID: ' + p.id + ' : ' + p.title;
                                let button3 = document.createElement('button');
                                button3.classList.add('btn');
                                button3.classList.add('btn-primary');
                                button3.setAttribute('type', 'button')
                                button3.innerText = 'Show all comments'
                                let wrap3 = document.createElement('div');
                                wrap3.classList.add('wrap3');


                                button3.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            wrap3.innerText = '';
                                            for (const comment of comments) {
                                                if (comment.postId === p.id) {
                                                    wrap3.style.display = 'block';
                                                    console.log(comment);
                                                    let post = document.createElement('div');
                                                    let body = document.createElement('div');
                                                    let mail = document.createElement('h3');
                                                    post.classList.add('post');
                                                    body.classList.add('body');
                                                    mail.classList.add('mail');
                                                    body.innerText = comment.body;
                                                    mail.innerText = 'User email: ' + comment.email;
                                                    post.appendChild(mail);
                                                    post.appendChild(body);
                                                    wrap3.appendChild(post);
                                                }
                                            }
                                        })
                                }

                                post.appendChild(title);
                                post.appendChild(body);
                                post.appendChild(button3);
                                post.appendChild(wrap3);
                                wrap2.appendChild(post)
                            }
                        }
                    })
            }

            collapseOne.appendChild(body);
            collapseOne.appendChild(button2);
            collapseOne.appendChild(wrap2);
            header.appendChild(button);
            item.appendChild(header);
            item.appendChild(collapseOne);
            wrap1.appendChild(item)
        }
    })