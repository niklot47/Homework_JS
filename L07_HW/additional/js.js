// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

function User (id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, companyName, companyCatchPhrase, companyBs){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adress = {
        street: addressStreet,
        suite: addressSuite,
        city: addressCity,
        zipcode: addressZipcode,
        geo: {lat: addressGeoLat, lng: addressGeoLng}
    }
    this.phone = phone;
    this.company = {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: companyBs
    }
}



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        for (let attribute of attrs) {
            this.attrs.push({
                titleOfAttr: attribute.slice(0, attribute.indexOf(' ')),
                actionOfAttr: attribute.slice(attribute.indexOf(' '))
            })
        }
    }
}



let tegs = [];
let titleOfTag = '', action = '', attrs = '';
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select


titleOfTag = 'a';
action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.'
attrs = [
    'accesskey Активация ссылки с помощью комбинации клавиш',
    'coords Устанавливает координаты активной области']
tegs.push(new Tag(titleOfTag, action, attrs));



titleOfTag = 'div';
action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. '
attrs = [
    'align Задает выравнивание содержимого тега <div>.',
    'title Добавляет всплывающую подсказку к содержимому.']
tegs.push(new Tag(titleOfTag, action, attrs));



titleOfTag = 'h1';
action = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня';
attrs = ['align Определяет выравнивание заголовка.'];
tegs.push(new Tag(titleOfTag, action, attrs));



titleOfTag = 'span';
action = 'Тег <span> предназначен для определения строчных элементов документа. '
attrs = [
    'accesskey Активация ссылки с помощью комбинации клавиш',
    'class Определяет имя класса, которое позволяет связать тег со стилевым оформлением.']
tegs.push(new Tag(titleOfTag, action, attrs));



titleOfTag = 'input';
action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.'
attrs = [
    'alt Альтернативный текст для кнопки с изображением.',
    'form Связывает поле с формой по её идентификатору.']
tegs.push(new Tag(titleOfTag, action, attrs));




titleOfTag = 'form';
action = 'Тег <form> устанавливает форму на веб-странице. '
attrs = [
    'accept-charset Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
    'action Адрес программы или документа, который обрабатывает данные формы.']
tegs.push(new Tag(titleOfTag, action, attrs));




titleOfTag = 'option';
action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.'
attrs = [
    'disabled Заблокировать для доступа элемент списка.',
    'label Указание метки пункта списка.']
tegs.push(new Tag(titleOfTag, action, attrs));



titleOfTag = 'select';
action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. '
attrs = [
    'form Связывает список с формой.',
    'multiple Позволяет одновременно выбирать сразу несколько элементов списка.',
    'name Имя элемента для отправки на сервер или обращения через скрипты.']
tegs.push(new Tag(titleOfTag, action, attrs));

console.log(tegs);