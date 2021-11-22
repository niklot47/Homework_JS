// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function myFunc1(a, b) {
    if (arguments.length === 1) {
        console.log(a);
    } else if (arguments.length === 2) {
        console.log(`${a}${b}`);
    }
}

myFunc1(5);
myFunc1(3, 8);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
function arraySum(array1, array2) {
    if (array1.length > array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array2[i]) {
                array1[i] += array2[i];
            }
        }
        return array1;
    } else {
        for (let i = 0; i < array2.length; i++) {
            if (array1[i]) {
                array2[i] += array1[i];
            }
        }
        return array2;
    }
}

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 8, 4, 6, 7];
console.log('\n\n\n' + arraySum(arr1, arr2));

arr1 = [4, 5, 3, 4, 7, 1];
arr2 = [2, 3, 4, 7];
console.log(arraySum(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function addValueToArrayIfItAlreadyNotExist(newValue, existingArray) {
    let resultArray = existingArray;
    let keyExist = false;
    for (let i = 0; i < existingArray.length; i++) {
        if (newValue === existingArray[i]) {
            keyExist = true;
            break;
        }
    }
    if (!keyExist) {
        resultArray[resultArray.length] = newValue;
    }
    return resultArray;
}


function allKeysFromObjectsToArray(arrayOfObject) {
    let keyArray = [];
    let resultArray = [];

    for (let obj of arrayOfObject) {
        keyArray = Object.keys(obj);
        // console.log(keyArray);
        for (const key of keyArray) {
            resultArray = addValueToArrayIfItAlreadyNotExist(key, resultArray);
        }
    }
    return resultArray;
}

let arr3 = [{name: 'Dima', age: 13},
            {model: 'Camry', age: '16'}];
console.log('\n\n\n' + allKeysFromObjectsToArray(arr3));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function allValuesFromObjectsToArray(arrayOfObject) {
    let resultArray = [];
    let keysOfObject = [];
    for (let obj of arrayOfObject) {
        keysOfObject = Object.keys(obj);
        for (let key of keysOfObject) {
            resultArray[resultArray.length] = obj[key];
        }
    }
    return resultArray;
}

console.log('\n\n\n' + allValuesFromObjectsToArray(arr3));


//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function swapTwoAdjacentCellInArray(existingArray, indexOfFirstCell) {
    let resultArray = [];
    let secondCell = existingArray[indexOfFirstCell + 1];
    existingArray[indexOfFirstCell + 1] = existingArray[indexOfFirstCell];
    existingArray[indexOfFirstCell] = secondCell;
    return resultArray = existingArray;
}

console.log('\n\n\n' + [9, 8, 0, 4]);
console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 0));

console.log('\n' + [9, 8, 0, 4]);
console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 1));

console.log('\n' + [9, 8, 0, 4]);
console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function allZeroToTheEndOfArray(array) {
    //цю функцію можна сиииисльно оптимізувати
    if (array.length > 1 && array.length < 101) {
        length = array.length;
        for(let i = 0; i<array.length-1; i++){
            for(let i = 0; i<array.length-1; i++) {
                if (array[i] === 0) {
                    for (let j = i; j < length - 1; j++) {
                        array = swapTwoAdjacentCellInArray(array, j);
                    }
                }
            }
        }
        return array;
    } else {
        return 'Error! Wrong length array.'
    }
}
console.log('\n\n\n'+allZeroToTheEndOfArray([1, 0, 6, 0, 3]));
console.log(''+allZeroToTheEndOfArray([0,1,2,3,4]));
console.log(''+allZeroToTheEndOfArray([0,0,1,0]));
console.log(''+allZeroToTheEndOfArray([0]));
console.log(''+allZeroToTheEndOfArray([0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8]));
console.log(''+allZeroToTheEndOfArray([0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8,
                                            0,1,2,3,4,0,8,0,1,2,3,4,0,8]));