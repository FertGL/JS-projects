//task1


let result = prompt('Введите число');

if (typeof +result == "number") {
    if (+result % 2 == 0) {
        alert(`Число ${result} четное`);
    } else {
        alert(`Число ${result} не четное`);
    }
} else {
    console.log('Это не число')
}

//task 2
const rubl = 83.9; 
let dollar = prompt('Введите количество долларов: ');

alert(`${+dollar} долларов = ${dollar * rubl} рублей`);