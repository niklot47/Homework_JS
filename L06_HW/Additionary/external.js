// -- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// -данні до знака равлика(@),
// -наявність равлика,
// -крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// -функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let validEmail = (emailString) => {
    let str = emailString.toLowerCase();
    return (str[0] !== '@') && (str.replace(/[^"@"]/g, "").length === 1) && (str.slice(str.indexOf('@')).indexOf('.') > 1)
    // (str.slice(str.indexOf('@')).indexOf('.')>1) - відрізаю все до собаки, знаходжу на якому місці крапка і перевіряю чи це більше 1го (бо стрінга зараз починається з собаки)
}

console.log(validEmail('someemail@gmail.com'));
console.log(validEmail('someeMAIL@gmail.com'));
console.log(validEmail('someeMAIL@i.ua'));
console.log(validEmail('some.email@gmail.com'));

console.log(validEmail('@gmail.com'));
console.log(validEmail('someMAIL@.com'));
console.log(validEmail('some@eMAIL@i.ua'));


// - є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sort = coursesArray.sort((currentCourse, nextCourse) => {
        if (currentCourse.modules.length > nextCourse.modules.length) {
            return -1;
        } else {
            return 1;
        }
    }
)
console.log(sort);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch)=>{
    return (str.length - str.replaceAll(stringsearch, '').length)/stringsearch.length   //перше що прийшло в голову...
}
console.log(count(str, symb)); // 5


// - Напишіть функцію, яка видаляє зайві слова з рядка str, залишивши у ній n слів.
str = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) =>{
    let arr = str.split(' ');
    let result = '';
    for(let i = 0; i<n; i++){
        result = result.concat(arr[i]).concat(' ');
    }
    return result.trim();

    //========АБО=====================

    // let nThCharPos = 0;
    // let charCount = 0;
    // for (let elem of str) {
    //     nThCharPos++
    //     if (elem === ' ') {
    //         charCount++
    //         if (charCount === n) {
    //             break
    //         }
    //     }
    // }
    // return str.slice(0, nThCharPos);
}
console.log(cutString(str, 5)); // 'Сила тяжести приложена к центру'