// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumberOfThree(a, b, c){
    if (c < b) {
        if (a<c){
            console.log(a);
        }else{
            console.log(c);
        }
    }else{
        if (a<b){
            console.log(a);
        }else{
            console.log(b);
        }
    }

}
minNumberOfThree(3,1,2);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumberOfThree(a, b, c){
    if (c > b) {
        if (a>c){
            console.log(a);
        }else{
            console.log(c);
        }
    }else{
        if (a>b){
            console.log(a);
        }else{
            console.log(b);
        }
    }

}
maxNumberOfThree(3,1,2);

// - створити функцію яка повертає найбільше число з масиву
function maxNumberOfArray(array){
    let maxNumber = array[0];
    for (let arrayElement of array) {
        if (arrayElement>maxNumber){
            maxNumber = arrayElement;
        }
    }
    return maxNumber;
}
let testArray = [0,1,2,3,4,0,8,0,1,2,3,4,0,8];
console.log(maxNumberOfArray(testArray));

// - створити функцію яка повертає найменьше число з масиву
function minNumberOfArray(array){
    let minNumber = array[0];
    for (let arrayElement of array) {
        if (arrayElement<minNumber){
            minNumber = arrayElement;
        }
    }
    return minNumber;
}
console.log(minNumberOfArray(testArray));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfArray(array){
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
console.log(sumOfArray(testArray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageOfArray(array){
    let average = 0;
    for (let arrayElement of array) {
        average += arrayElement;
    }
    average = average / array.length;
    return average;
}
console.log(averageOfArray(testArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minOfNumbersMaxToLog(){
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
console.log(minOfNumbersMaxToLog(0,1,2,3,4,0,8,0,1,2,3,4,0,8));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArray(arrayLength, limit){
    let array = [];
    for (let i = 0; i<arrayLength; i++){
        array[i] = Math.round(Math.random()*(arguments.length===1?100:limit));
    }
    return array;
}
console.log(randomArray(20));
console.log(randomArray(5, 1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function array2yarra(array){
    let newArray = [];
    let iter = array.length-1;
    for (let i=0; i < array.length; i++) {
        newArray[iter]=array[i];
        iter -= 1;
    }
    return newArray;
}
console.log(array2yarra(testArray));