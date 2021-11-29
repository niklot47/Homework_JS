// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, speed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.volume = volume;

    //drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    //info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        // мій варіант не спрацював прийшлось підглянути у resolve
        // Object.keys(this).forEach(function (key) {
        //     console.log(key, ' - ', this[key]);
        // })
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
        //хоча у відео Сергій виводив не динамічно (? не знаю, як це правильно назвавти,
        // коли сам руками прописуєш назви полів і т.д.). Може тоді так завдання і не стоїть?..
    }

    //increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
    }

    //changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
}

let wv = new Car('wv', 'Deutschland', 2003, 180, 93.5);
// console.log(wv);
wv.drive();
wv.info();
wv.increaseMaxSpeed(37);
wv.drive();
wv.changeYear(2006);
console.log(wv);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, producer, year, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;

    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
    newMaxSpeed (newSpeed) {
        this.speed = this.speed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let addCar2 = new CarClass('Peugeot', 'France', 2000, 270, 2.0);
console.log(addCar2);
addCar2.drive();
addCar2.info();
addCar2.newMaxSpeed(20);
addCar2.drive();
addCar2.changeYear(2010)
addCar2.info();
addCar2.addDriver('Vasil')
console.log(addCar2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

const CinderellaArray = [
    new Cinderella('Vespula', 21, 41),
    new Cinderella('Elihal', 22, 40),
    new Cinderella('Molly', 23, 39),
    new Cinderella('Marabella', 24, 38),
    new Cinderella('Rosa var Attre', 25, 37),
    new Cinderella('Trivia', 26, 36),
    new Cinderella('Rosemary', 27, 35),
    new Cinderella('Zoltan', 147, 53),
];
console.log(CinderellaArray);


//Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, findShoese) {
        this.name = name;
        this.age = age;
        this.findShoese = findShoese;
    }
}
const prince = new Prince('Julian Alfred Pankratz', 45, 35);

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const FindCinderella = (CinderellaArray, prince) => {
    for (const item of CinderellaArray) {
        if (item.footsize === prince.findShoese) {
            return `Your cinderella: ${item.name}`
        }
    }
};
console.log(FindCinderella(CinderellaArray, prince))

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const emptyPrincess = CinderellaArray.find((item) => item.footsize === prince.findShoese);
console.log(emptyPrincess);