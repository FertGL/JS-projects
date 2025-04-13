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

