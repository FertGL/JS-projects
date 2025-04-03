let num1 = prompt('Введите первое число: ');
let num2 = prompt('Введите второе число: ');
let oper = prompt('Введите операцию');

if (!isNaN(+num1) & !isNaN(+num2)) {
    if ((+num1 == 0 || +num2 == 0) & oper == "/") {
        alert('Делить на 0 нельзя)')
    } else {
        switch(oper) {
            case "*":
                let result = +num1 * +num2;
                alert(`result = ${result}`);
                break;
            case "+":
                let result2 = +num1 + +num2;
                alert(`result = ${result2}`);
                break;
            case "-":
                let result3 = +num1 - +num2;
                alert(`result = ${result3}`);
                break;
            case "/":
                let resul4 = +num1 / +num2;
                alert(`result = ${resul4}`);
                break;
            default:
                alert('Такой операции нет!');
                break;
        }
    }
} else {
    alert('Вы ввели не число');
}