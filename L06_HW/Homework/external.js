// - Знайти та вивести довижину настипних стрінгових значень

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('\n');
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();
console.log(str1);
console.log(str2);
console.log(str3);



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('\n');
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());





// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('\n');
str1 = ' dirty string   ';
str1 = str1.trim()
console.log(str1);



str1 = 'Каждый охотник желает знать';
// - Напишіть функцію, яка перетворює рядок на масив слів.
let stringToarray = (str)=>{
    return str.split(' ')
}
let arr = stringToarray(str1);
console.log('\n');
console.log(arr);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']





str1 = 'Каждый охотник желает знать';
// - Напишіть функцію, яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters = (str, length) =>{
    return str.slice(0,length);
}
document.writeln('<hr>'+delete_characters(str1, 7)); // Каждый




// - Напишіть функцію, яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let insert_dash = (str)=>{
    str = str.toUpperCase();
    return str.replaceAll(' ', '-')
}
str1 = "HTML JavaScript PHP";
console.log('\n');
document.writeln('<hr>'+insert_dash(str1)); // 'HTML-JAVASCRIPT-PHP'




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstCharToUpperCase = (str) =>{
    str = str.trim();
    let firstChar = str[0].toUpperCase();
    return firstChar.concat(str.slice(1,str.length));
}
str1 = 'taras grygorovych franko';
console.log(firstCharToUpperCase(str1));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    let arr = str.split(' ');
    let resultString = '';
    for(let i = 0; i<arr.length; i++){
        resultString = resultString.concat(firstCharToUpperCase(arr[i])).concat(' ');
    }
    return resultString.trim();
}
str1 = 'taras grygorovych franko';
console.log('\n');
console.log(capitalize(str1));
