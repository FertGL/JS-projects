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

