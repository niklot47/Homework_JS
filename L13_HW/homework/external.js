// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage,

let form = document.forms.log;

form.onsubmit = function (e){
    let name = this.name.value;
    let user = {name};
    console.log(user);
    let users = JSON.parse(localStorage.getItem('users'));
    if(!users){
        users = [];
        users.push(user);
    }else{
        users.push(user);
    }
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
};