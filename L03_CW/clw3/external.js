// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let arr1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('перебрати масив циклом while');
let i = 0;
while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}


console.log('перебрати масив циклом for');
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log('перебрати масив циклом while та вивести  числа тільки з непарним індексом');
i = 0;
while (i < arr1.length) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('перебрати масив циклом for та вивести  числа тільки з непарним індексом');
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('перебрати масив циклом while та вивести  тільки парні  значення');
i = 0;
while (i < arr1.length) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('перебрати масив циклом for та вивести тільки парні  значення');
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('замінити кожне число кратне 3 на слово "okten"');
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 3 === 0) {
        arr1[i] = 'okten';
    }
    console.log(arr1[i]);
}

// 8. вивести масив в зворотньому порядку.
arr1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('вивести масив в зворотньому порядку.');
for (let i = arr1.length; i >= 0; i--) {
    console.log(arr1[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

console.log('\n\n\nвсі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');
console.log('перебрати масив циклом while');
i = arr1.length;
while (i >=0) {
    console.log(arr1[i]);
    i--;
}


console.log('перебрати масив циклом for');
for (let i = arr1.length; i >= 0; i--) {
    console.log(arr1[i]);
}

console.log('перебрати масив циклом while та вивести  числа тільки з непарним індексом');
i = arr1.length;
while (i >=0) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('перебрати масив циклом for та вивести  числа тільки з непарним індексом');
for (let i = arr1.length; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr1[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('перебрати масив циклом while та вивести  тільки парні  значення');
i = arr1.length;
while (i >=0) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('перебрати масив циклом for та вивести тільки парні  значення');
for (let i = arr1.length; i >= 0; i--) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('замінити кожне число кратне 3 на слово "okten"');
for (let i = arr1.length; i >= 0; i--) {
    if (arr1[i] % 3 === 0) {
        arr1[i] = 'okten';
    }
    console.log(arr1[i]);
}