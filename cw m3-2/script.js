let button = document.querySelector('button');
let textInput = document.querySelector('#login');
let textLabel = document.querySelector('[for=login]');

document.addEventListener('DOMContentLoaded', function (e){
    // console.log(button);
    // button.addEventListener('click', function (event) {
    //     console.log(event);
    //     alert('Меня нажали');
    // })


    // textInput.addEventListener('input', function(e) {
    //     console.log('текстовое поле изменено input', e.target.value);

    //     if(e.target.value.length < 5) {
    //         textLabel.style.color = "red";
    //     } else {
    //         textLabel.style.color = "green";
    //     }
    // })

    // textInput.addEventListener('change', function(e) {
    //     console.log('текстовое поле изменено change', e.target.value);
    // })

    document.addEventListener('mousemove', function (e) {
        if(e.pageX > 1500 & e.pageY < 100) {
            alert('Не покидай страницу')
        }
    })

    // document.addEventListener('mousedown', function (e) {
    //     console.log('мышь зажата',e.pageX, e.pageY);
    // })

    // document.addEventListener('mouseup', function (e) {
    //     console.log('мышь отпустили',e.pageX, e.pageY);
    // })
}) 


// window.addEventListener('resize', function (e) {
//     console.log('размеры изменения окна',window.innerHeight, window.innerWidth)
// })
// document.addEventListener('DOMContentLoader', (e) => {
    
// }) 

// document.addEventListener('DOMContentLoader', someFunction)

// function someFunction(param) {

// }

function calculate() {
    const input = document.getElementById('inputField').value;
    const [num1, operator, num2] = input.split(' ');

    const a = +num1;
    const b = +num2;

    if (isNaN(a) || isNaN(b)) {
        alert('Пожалуйста, введите корректные числа.');
        return;
    }

    let sum, 
        difference, 
        product, 
        quotient;

    switch (operator) {
        case '+':
            sum = a + b;
            break;
        case '-':
            difference = a - b;
            break;
        case '*':
            product = a * b;
            break;
        case '/':
            quotient = a / b;
            break;
        default:
            alert('Пожалуйста, используйте один из операторов: +, -, *, /');
            return;
    }

    document.getElementById('sumResult').textContent = sum !== undefined ? sum : 'N/A';
    document.getElementById('differenceResult').textContent = difference !== undefined ? difference : 'N/A';
    document.getElementById('productResult').textContent = product !== undefined ? product : 'N/A';
    document.getElementById('quotientResult').textContent = quotient !== undefined ? quotient : 'N/A';
}

function clearFields() {
    document.getElementById('inputField').value = '';
    document.getElementById('sumResult').textContent = '';
    document.getElementById('differenceResult').textContent = '';
    document.getElementById('productResult').textContent = '';
    document.getElementById('quotientResult').textContent = '';
}