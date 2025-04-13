class Shape {
    area() {
        throw new Error('Метод не доступен');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape{
    constructor(width, hight) {
        super();
        this.width = width;
        this.hight = hight;
    }

    area() {
        return this.width * this.hight;
    }
}