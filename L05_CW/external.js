// Всі функції повинні бути описані стрілочним типом!!!!
// let func = () => {}

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minOfThree = (a, b, c) => (a<b?(a<c?a:c<b?c:b):(b<c?b:c)) //знаю, не читабельно, просто експеримент:)
 // console.log(minOfThree(4, 5, 3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxOfThree = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            return a
        } else {
            if (b > c) {        //я зараз зрозумів, що в дз4 тут в мене помилка - я не порівнював тут b i c
                return b
            }else {
                return c
            }
        }
    } else {
        if (b > c) {
            return b
        } else {
            return c
        }
    }
}
// console.log(maxOfThree(4, 5, 3));

// - створити функцію яка повертає найбільше число з масиву
let maxNumberOfArray = (array) =>{
    let maxNumber = array[0];
    for (let arrayElement of array) {
        if (arrayElement>maxNumber){
            maxNumber = arrayElement;
        }
    }
    return maxNumber;
}
// let testArray = [0,1,2,3,4,0,8,0,1,2,3,4,0,8];
// console.log(maxNumberOfArray(testArray));


// - створити функцію яка повертає найменьше число з масиву
let minNumberOfArray = (array) => {
    let minNumber = array[0];
    for (let arrayElement of array) {
        if (arrayElement<minNumber){
            minNumber = arrayElement;
        }
    }
    return minNumber;
}
//console.log(minNumberOfArray(testArray));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumOfArray = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
//console.log(sumOfArray(testArray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageOfArray = (array) => {
    let average = 0;
    for (let arrayElement of array) {
        average += arrayElement;
    }
    average = average / array.length;
    return average;
}
//console.log(averageOfArray(testArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minOfNumbersMaxToLog = (...arguments) =>{
    let minNumber = arguments[0];
    let maxNumber = arguments[0];
    for (let arrayElement of arguments) {
        if (arrayElement<minNumber){
            minNumber = arrayElement;
        }
        if (arrayElement>maxNumber){
            maxNumber = arrayElement;
        }
    }
    console.log(maxNumber);
    return minNumber;
}
// console.log(minOfNumbersMaxToLog(0,1,2,3,4,0,8,0,1,2,3,4,0,8));

// - створити функцію яка заповнює масив рандомними числами
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArray = (...arguments) => {
    // arrayLength, limit
    let array = [];
    for (let i = 0; i<arguments[0]; i++){
        array[i] = Math.round(Math.random()*(arguments.length===1?100:arguments[1]));
    }
    return array;
}
// console.log(randomArray(20));
// console.log(randomArray(5, 1000));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array2yarra = (array) => {
    let newArray = [];
    let iter = array.length-1;
    for (let i=0; i < array.length; i++) {
        newArray[iter]=array[i];
        iter -= 1;
    }
    return newArray;
}
console.log(array2yarra([1,4,6,87,3,0]));
