let wrap1 = document.getElementsByClassName('wrap1')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const p of posts) {
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
            let button4 = document.createElement('button');
            button4.classList.add('btn');
            button4.classList.add('btn-primary');
            button4.setAttribute('type', 'button')
            button4.innerText = 'Hide'
            let wrap3 = document.createElement('div');
            wrap3.classList.add('wrap3');

            button4.onclick = ()=> {
                wrap3.innerText = '';
                wrap3.style.display = 'none';
            }

            button3.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        wrap3.style.display = 'block';
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
            post.appendChild(button4);
            post.appendChild(wrap3);
            wrap1.appendChild(post);
        }
    })