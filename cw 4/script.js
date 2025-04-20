// console.log(window.document);

// console.log(document);

// alert(window.innerHeight);
// alert(window.innerWidth);
// alert(window.devicePixelRatio);

// console.log();

// setTimeout(() => {
//     alert('Отложеное действие')
// }, 10000);

// setInterval(() => {
//     console.log('123');
// }, 5000)


// localStorage


// document.cookie+="userName=Gleb";




// let body = document.querySelector('body');
// let botton = document.getElementById('button');
// let buttons = document.querySelectorAll('.create');
// button.style.backgroundColor = "red";
// let lastLabelArray = [];

// for(let index = 0; index < buttons.length; index++) {
//     const element = buttons[index];

//     element.style.color = "green"

//     element.addEventListener('click', function (param) {
//         alert('Нажали!');

//         let elem = document.createElement('div')
//         elem.className = "text-label";
//         elem.innerText = "Создали лейбл через нажатие на кнопку";
//         document.querySelector('.labels-block').appendChild(elem);
    
//         lastLabelArray.push(elem);
//     })
// }

// document.querySelector('#removeLast').addEventListener('click', function (param) {
//     if(lastLabelArray.length) {
//         let lastElement = lastLabelArray.pop();
//         document.querySelector('.labels-block').removeChild(lastElement);
//     } else {
//         alert('Нет записей');
//     }
// })


const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', 
    '#E74C3C', '#3498DB', '#2ECC71', '#e67e22', '#9b59b6'
];

document.getElementById('addBlockButton').addEventListener('click', function() {
    const colorContainer = document.getElementById('colorContainer');
    const block = document.createElement('div');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    block.style.backgroundColor = randomColor;
    block.className = 'color-block';
    
    block.addEventListener('click', function() {
        colorContainer.removeChild(block);
    });

    colorContainer.appendChild(block);
});