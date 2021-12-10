// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let f1 = document.createElement('form');
f1.setAttribute('name', 'f1');
f1.classList.add('form1');
f1.innerText = 'Task_1.'
let input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('name','name');
input1.value = 'Mykola';
let input2 = document.createElement('input');
input2.setAttribute('type','number');
input2.setAttribute('name','age');
input2.value = '27';
let button1 = document.createElement('button');
button1.innerText = 'Save';
f1.appendChild(button1);
f1.appendChild(input1);
f1.appendChild(input2);
document.body.appendChild(f1);

let myButtonOmMouseOver = function (obj){
    obj.onmouseover = function (){
        obj.style.borderBottom = '5px solid white';
        obj.style.borderRight = '5px solid white';
        obj.style.fontSize = '10px';
    }
}
let myButtonOmMouseLeave = function (obj){
    obj.onmouseleave = function (){
        obj.style.borderBottom = '5px double white';
        obj.style.borderRight = '5px double white';
        obj.style.fontSize = '12px';
        obj.style.color = 'white';
        obj.style.backgroundColor = 'blue';
    }
}
let myButtonOmMouseDown = function (obj){
    obj.onmousedown = function (){
        obj.style.color = 'blue';
        obj.style.backgroundColor = 'white';
    }
}
let myButtonOmMouseUP = function (obj){
    obj.onmouseup = function (){
        obj.style.color = 'white';
        obj.style.backgroundColor = 'blue';
    }
}
button1.onmouseover = function () {
    myButtonOmMouseOver(this);
}
button1.onmouseleave = function (){
    myButtonOmMouseLeave(this);
}
button1.onmousedown = function (){
    myButtonOmMouseDown(this);
}
button1.onmouseup = function (){
    myButtonOmMouseUP(this);
}

f1.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    localStorage.setItem('userDate', JSON.stringify({name, age}));
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let f2 = document.createElement('form');
f2.setAttribute('name', 'f2');
f2.classList.add('form2');
f2.innerText = 'Task_2. '
let input11 = document.createElement('input');
input11.setAttribute('type','text');
input11.setAttribute('name','model');
input11.value = 'Fiat Cinquecento'
let input12 = document.createElement('input');
input12.setAttribute('type','text');
input12.setAttribute('name','type');
input12.value = 'hatchback'
let input13 = document.createElement('input');
input13.setAttribute('type','float');
input13.setAttribute('name','volume');
input13.value = '1108';
let button2 = document.createElement('button');
button2.innerText = 'OK';
f2.append(button2, input11, input12, input13);
document.body.appendChild(f2);


button2.onmouseover = function () {
    myButtonOmMouseOver(this);
}
button2.onmouseleave = function (){
    myButtonOmMouseLeave(this);
}
button2.onmousedown = function (){
    myButtonOmMouseDown(this);
}
button2.onmouseup = function (){
    myButtonOmMouseUP(this);
}

f2.onsubmit = function (e){
    // e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model: model, type: type, volume: volume};
    console.log(car);
    let cars = JSON.parse(localStorage.getItem('cars'));
    if(!cars){
        cars = [];
        cars.push(car);
    }else{
        cars.push(car);
    }

    console.log(cars);
    localStorage.setItem('cars', JSON.stringify(cars));
};


