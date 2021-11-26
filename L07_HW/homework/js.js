// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let randID = ()=>(Math.floor(Math.random()*98)+1)

let arrUsers = [];
for (let i = 0; i < 10; i++){
    arrUsers.push(new User(randID(), 'someName', 'someSurname', 'some@mail.net', '+34567890'))
}
console.log(arrUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrUsers.filter(a => a.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrUsers.sort((a , b )=> a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
function randOrderArray(){
    let length = Math.floor(Math.random()*30);
    let arr = [];
    for (let i=0; i<length; i++){
        arr.push('itemCode'+Math.floor(Math.random()*900000)+100000)
    }
    return arr;
}

let Clients = [];
for (let i=0; i<10; i++){
    Clients.push(new Client(randID(),'someName', 'someSurname', 'some@mail.net', '+34567890', randOrderArray()))
}
console.log(Clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((a,b) => a.order.length - b.order.length));