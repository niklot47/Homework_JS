//
// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
//ya trohy zbilshyv kil`kist` variantiv
let n4 = 'Harry._-Potter'
let n5 = 'Ron--_Whisley'
let n6 = 'Hermione_-_Granger'
let n7 = 'Harry .Potter'
let n8 = 'Ron- Whisley'
let n9 = 'Hermione   Granger'
let n10 = 'Harry. .Potter'
let n11 = 'Ron-- Whisley'
let n12 = 'Hermione __Granger'

let namesToValid = (string) => {
    if (string.indexOf(" ") !== -1) {
        string = string.replace(' ', '#')
    }else if(string.indexOf(".") !== -1){
        string = string.replace('.', '#')
    }else if(string.indexOf("-") !== -1){
        string = string.replace('-', '#')
    }else if(string.indexOf("_") !== -1){
        string = string.replace('_', '#')
    }
    string = string.replaceAll(' ', '');
    string = string.replaceAll('-', '');
    string = string.replaceAll('_', '');
    string = string.replaceAll('.', '');

    string = string.replaceAll('#', ' ');
    console.log(string);
}

namesToValid(n1);
namesToValid(n2);
namesToValid(n3);
namesToValid(n4);
namesToValid(n5);
namesToValid(n6);
namesToValid(n7);
namesToValid(n8);
namesToValid(n9);
namesToValid(n10);
namesToValid(n11);
namesToValid(n12);



// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randArray = (length)=>{
    let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
}

console.log(randArray(50));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = randArray(20);
arr = arr.sort((a, b) => a-b)
console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
arr = arr.filter((a) => a%2 === 0)
console.log(arr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
arr = randArray(20);
arr = arr.map(a => a.toString());   //не зовсім розумію, як саме тут використати тут колбек?
console.log(arr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    // return arr.sort((a, b) => {return direction === 'ascending' ? a - b : direction === 'descending' ? b - a : 0})
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b)
    }else if(direction === 'descending'){
        return arr.sort((a, b) => b - a)
    }else{
        console.log('Wrong direction!');
        return arr;
    }
}

let nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
console.log(sortNums(nums, 'deDDnding')); // [21,11,3]


// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(a => a.monthDuration > 5));

// - Напишите функцию , которая делит строку на подстроки, состоящие из n символов.
let cutString = (str, n) => {
    const result = [];
    while (str.length) {
        result.push(str.substr(0, n));
        str = str.slice(n);
    }
    return result
}
console.log(cutString('наслаждение', 3)); // [нас,лаж,ден,ие]