class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
        if(name.length = 0) {
            throw new Error('Введите имя корректно');
        } else {
            this.name = name;
        }

        if(age <= 0) {
            throw new Error('Введите возраст который бдует больше 0');
        } else {
            this.age = age;
        }
        
        if(gender != 'женщина' || gender != 'мужчина') {
            throw new Error('Введите коректный пол');
        } else {
            this.gender = gender;
        }
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    introduce() {
        console.log(`Привет меня зовут ${this.getName}`);
    }

    isAdult() {
        if (age >= 18) {
            return true;
        } else {
            return false;
        }
    }

}

class Student extends Person {
    major;
    gpa;

    constructor(name, major, gpa) {
        super(name);
        this.major = major;
        

        if (gpa < 0 || gpa > 4) {
            throw new Error('Введите корректный средний бал');
        } else {
            this.gpa = gpa;
        }
    }

    study() {
        console.log(`${this.name} учится на специальности ${this.major}.`);
    }

    improveGpa(points) {
        this.gpa += points;
        if (this.gpa > 4) {
            this.gpa = 4;
        }
    }

    introduce() {
        console.log(`Меня зовут ${this.name}, я учусь на специальности ${this.major} с средним баллом ${this.gpa}.`);
    }
}