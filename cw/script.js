//Обьекты

// Создание - литеральный способ
const person = {
    name: "Глеб",
    age: 22,
    isStudent: true,

    greet: function () {
        alert(`Hello! Меня зовут ${this.name}`);
    }
}

const person1 = new Object();
person1.name = "Gleb";
person1.age = 25;
person1["isStudent"] = false;
person1.greet = function (params) {
    alert(`Привет привет! я ${this.name}`)
}

person.greet();
person1.greet();


function createObject(name, age, isStudent, greet) {
    return {
        name: name,
        age: age,
        isStudent: isStudent,
        greet: greet
    }
}

const person3 = createObject("Степа", 19, true,() => alert(`Привет привет! я ${person3.name}`));

person3.greet();

//Изменение свойств обьекта

person1.age = 30;
alert("age = " + person1.age);

//Удаление свойств

delete person.name;
alert("name =" + person.name);

//Встроеные методы Object

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

console.log('name' in person3);
console.log('name' in person);

console.log(person1.hasOwnProperty('name'));

let person4 = {};

Object.assign(person4, person3);

console.log(person4);

person4.name = "Константин"

console.log(person4);
console.log(person3);

for (const key in person4) {
    if (Object.prototype.hasOwnProperty.call(person4, key)) {
        const element = person4[key];
        console.log(`${key} ${element}`)
    }
}

Object.prototype.describe = function (param) {
    console.log(this.name, this.age)
}

person4.describe();