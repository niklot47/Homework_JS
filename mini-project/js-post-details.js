// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего
// поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let post = JSON.parse(sessionStorage.getItem('postDetails'));
// console.log(post);
let postTitle = document.getElementsByClassName('post__title')[0];
postTitle.innerText = `${post.title}`;
let postBody = document.getElementsByClassName('post__body')[0];
postBody.innerText = `${post.body}`;
let postId = document.getElementsByClassName('post__id')[0];
postId.innerText = `Post id: ${post.id}. User id: ${post.userId}`;
let commentsShow = document.getElementsByClassName('comments-btn')[0];
let wrap = document.getElementsByClassName('comments')[0];
commentsShow.onclick = () => {
    wrap.style.display = "flex";
    commentsShow.style.display = 'none';

    fetch('https://jsonplaceholder.typicode.com/posts/POST_ID/comments'.replace('POST_ID', ('' + post.id)))
        .then(response => response.json())
        .then(comments => {
            for (let comment of comments) {
                console.log(comment);
                let comWithImg = document.createElement('div');
                comWithImg.classList.add('comWithImg')
                let comImg = document.createElement('img');
                comImg.src = 'img/user.png';
                comImg.classList.add('com-img');
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                let commentInfo = document.createElement('div');
                commentInfo.classList.add('details__comment-info');
                commentInfo.innerText = `${comment.name}`
                let commentBody = document.createElement('div');
                commentBody.classList.add('details__comment-body');
                commentBody.innerText = `${comment.body}`

                // let commentDetails = document.createElement('a');
                // commentDetails.classList.add('details__comment-details');
                // commentDetails.innerText = 'Show all comments'
                // commentDetails.href = '#';

                commentDiv.append(commentInfo);
                comWithImg.append(commentDiv,comImg)
                wrap.appendChild(comWithImg);

                // commentDetails.onclick = () => {
                //     sessionStorage.setItem('postDetails', JSON.stringify(post));
                //     document.location.href = "post-details.html";
                // }
            }
        });
}

