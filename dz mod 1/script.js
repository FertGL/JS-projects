
document.getElementById('task2').addEventListener('click', function() {
    let x = prompt("Введите любое значение для X:");
    let elements = [];

    for (let i = 0; i < 5; i++) {
        let element = prompt(`Введите элемент ${i + 1}:`);
        elements.push(element);
    }

    const index = elements.indexOf(x);
    if (index !== -1) {
        
        let leftNeighbor = index > 0 ? elements[index - 1] : elements[elements.length - 1];
        let rightNeighbor = index < elements.length - 1 ? elements[index + 1] : elements[0];
        
        alert(`Индекс X: ${index}\nЛевый сосед: ${leftNeighbor}\nПравый сосед: ${rightNeighbor}`);
    } else {
        alert("Элемент X не найден в массиве.");
    }
});

document.getElementById('task3').addEventListener('click', function() {
    let evenStrings = [];
    let oddStrings = [];
    
    for (let i = 0; i < 10; i++) {
        let str = prompt(`Введите строку ${i + 1}:`);
        
        if (str.length % 2 === 0) {
            evenStrings.push(str);
        } else {
            oddStrings.push(str);
        }
    }

    alert("Четные строки: " + evenStrings.join(', '));
    alert("Нечетные строки: " + oddStrings.join(', '));
});