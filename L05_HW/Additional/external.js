// - Дано натуральное число n. Выведите все числа от 1 до n.
let numbersToConsole = (maxNumber) => {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i)
    }
}
//numbersToConsole(30);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numbersToConsoleFromTo = (firstNumber, secondNumber) => {
    if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            console.log(i)
        }
    } else {
        for (let i = firstNumber; i >= secondNumber; i--) {
            console.log(i)
        }
    }
}
// numbersToConsoleFromTo(11, 30);
// numbersToConsoleFromTo(550, 532);


// Так вийшло, що наступні 2 завдання я зробив ще на попередню ДЗ, тому я просто зкопіюю їх (без змін)

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

// console.log('\n\n\n' + [9, 8, 0, 4]);
// console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 0));
//
// console.log('\n' + [9, 8, 0, 4]);
// console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 1));
//
// console.log('\n' + [9, 8, 0, 4]);
// console.log(swapTwoAdjacentCellInArray([9, 8, 0, 4], 2));


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
// console.log('\n\n\n'+allZeroToTheEndOfArray([1, 0, 6, 0, 3]));
// console.log(''+allZeroToTheEndOfArray([0,1,2,3,4]));
// console.log(''+allZeroToTheEndOfArray([0,0,1,0]));
// console.log(''+allZeroToTheEndOfArray([0]));
// console.log(''+allZeroToTheEndOfArray([0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8]));
// console.log(''+allZeroToTheEndOfArray([0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8,
//     0,1,2,3,4,0,8,0,1,2,3,4,0,8]));