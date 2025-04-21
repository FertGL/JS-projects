document.getElementById('task1').addEventListener('click', function() {
    let num1 = prompt("Введите первое число:");
    let num2 = prompt("Введите второе число:");
    let min = Math.min(num1, num2);
    alert(`Меньшее число: ${min}`);
});


document.getElementById('task2').addEventListener('click', function() {
    let num1 = prompt("Введите число для возведения в степень:");
    let num2 = prompt("Введите степень:");
    let result = Math.pow(num1, num2);
    alert(`Результат: ${result}`);
});


document.getElementById('task3').addEventListener('click', function() {
    let num1 = prompt("Введите первое число:");
    let operation = prompt("Введите операцию (+, -, *, /):");
    let num2 = prompt("Введите второе число:");
    let result;

    switch (operation) {
        case '+':
            result = +num1 + +num2;
            break;
        case '-':
            result = +num1 - +num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert("Неверная операция.");
            return;
    }
    alert(`Результат операции: ${result}`);
});


document.getElementById('task4').addEventListener('click', function() {
    let number = prompt("Введите число для вывода таблицы умножения:");
    let multiplicationTable = "";

    for (let i = 1; i <= 10; i++) {
        multiplicationTable += `${number} * ${i} = ${number * i}`;
    }
    alert(`Таблица умножения для ${number}:\n${multiplicationTable}`);
});