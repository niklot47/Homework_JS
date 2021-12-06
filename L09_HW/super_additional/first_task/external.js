let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addressArr = [];
// let i = 0;
// for (let user of users) {
//     let ad = user.address;
//     addressArr[i] = '';
//     for (let userElement in ad) {
//         addressArr[i] = addressArr[i] + userElement + ': ' + ad[userElement] + '\n';
//     }
//     i++;
// }
// for (let el of addressArr) {
//     console.log(el);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let fr = document.createElement('div');
document.body.appendChild(fr);

let addUser = (user, wrap) => {
    let userBlock = document.createElement('div');
    userBlock.classList.add('userBlock');
    for (let prop in user) {
        if (typeof(user[prop]) === 'object') {
            userBlock.innerText = userBlock.innerText + prop + ': '  + '[ ';
            for (let propKey in user[prop]) {
                userBlock.innerText = userBlock.innerText + propKey+': '+user[prop][propKey]+', '
            }
            userBlock.innerText = userBlock.innerText + ']';
        } else {
            userBlock.innerText = userBlock.innerText + prop + ': ' + user[prop] + ';  ';
        }
    }
    return wrap.appendChild(userBlock);
}

let wrap1 = document.createElement('div');
wrap1.classList.add('wrap');
for (let user of users) {
   addUser(user,wrap1);
}
document.body.appendChild(wrap1);



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

let wrap2 = document.createElement('diw');
wrap2.classList.add('wrap2');
for (let userOfUsers of users) {
    let user = document.createElement('div')
    user.classList.add('user');
    let name = document.createElement('div');
    name.classList.add('name');
    name.innerText = 'Name:  ' + userOfUsers.name
    let age = document.createElement('div');
    age.classList.add('age');
    age.innerText = 'Age:  ' + userOfUsers.age
    let status = document.createElement('div');
    status.classList.add('status');
    status.innerText = 'Status:  ' + userOfUsers.status
    let address = document.createElement('div');
    // address.classList.add('address');
    address.innerText = 'Address:  ';
    for (let addressKey in userOfUsers.address) {
        address.innerText = address.innerText + userOfUsers.address[addressKey] + ', ';
    }

    user.appendChild(name);
    user.appendChild(age);
    user.appendChild(status);
    user.appendChild(address);
    wrap2.appendChild(user);
}
document.body.appendChild(wrap2);



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let wrap3 = document.createElement('diw');
wrap3.classList.add('wrap3');
for (let userOfUsers of users) {
    let user = document.createElement('div')
    user.classList.add('user');
    let name = document.createElement('div');
    name.classList.add('name');
    name.innerText = 'Name:  ' + userOfUsers.name
    let age = document.createElement('div');
    age.classList.add('age');
    age.innerText = 'Age:  ' + userOfUsers.age
    let status = document.createElement('div');
    status.classList.add('status');
    status.innerText = 'Status:  ' + userOfUsers.status
    let address = document.createElement('div');
    address.classList.add('address');
    address.innerText = 'Address:  ';
    for (let addressKey in userOfUsers.address) {
        let key = document.createElement('div');
        key.classList.add('address_'+addressKey);
        key.innerText = addressKey +': ' + userOfUsers.address[addressKey];
        address.appendChild(key);
    }

    user.appendChild(name);
    user.appendChild(age);
    user.appendChild(status);
    user.appendChild(address);
    wrap3.appendChild(user);
}
document.body.appendChild(wrap3);






