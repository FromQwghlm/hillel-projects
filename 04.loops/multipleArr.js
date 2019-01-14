// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

var maxNum = +prompt('Сколько чисел вывести?', 2);
var multiple = +prompt('Введите число к которому будем выводить кратные числа', 2);
var multipleList = [];

// FOR SECTION
console.log('// FOR SECTION: числа от 1 до ' + maxNum + ' кратные ' + multiple);
for (var i = 1; i <= maxNum; i++) {
	if (i % multiple === 0) {
        console.log(i);
        multipleList.push(i);
    }       
}

// WHILE SECTION
var multipleList = [];
console.log('// WHILE SECTION: числа от 1 до ' + maxNum + ' кратные ' + multiple);
var i = 1;
while (i <= maxNum && multipleList.length !== maxNum) {
	if (i % multiple === 0) {
        console.log(`${i} / ${multiple} = ${i / multiple} (add ${i} to multipleList)`);
        multipleList.push(i);
    }
	i++;
}

console.log(...multipleList);