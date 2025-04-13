let arr = ['Январь', 
           'Февраль', 
           'Март', 
           'Апрель', 
           'Май', 
           'Июнь', 
           'Июль', 
           'Август', 
           'Сентябрь', 
           'Октябрь', 
           'Ноябрь', 
           'Декабрь'];


for( let i = arr.length - 1; i >= 0; i++) {
    console.log(arr[i]);
}
console.log(arr[arr.length-1]);
arr[arr.length-1] = '';


let arr2 = []; 

for(let i = 1; 1 <= 10; i++) {
    let a = prompt('Введите число');

    if(+a % 2 == 0) {
        arr2[arr2.length] = +a;
    }
}

for( let i = arr.length - 1; i >= 0; i++) {
    console.log(arr2[i]);
}

