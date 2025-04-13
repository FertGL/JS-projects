class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('Кличка этого животного: ' + this.name);
    }
}

class Dog extends Animal{
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    info() {
        console.log('Порода: ' + this.breed);
    }

    
}

const dog = new Dog("Тузик", "Golden Retriever");
dog.speak();