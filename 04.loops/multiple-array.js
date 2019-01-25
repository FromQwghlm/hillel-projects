// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

var multiple = +prompt('Введите число к которому будем выводить кратные числа', 2);
var maxNum = +prompt('Сколько кратных чисел вывести?', 10);
var multipleList = [];

// FOR SECTION
for (var i = 1; multipleList.length < maxNum; i++) {
	if (i % multiple === 0) multipleList.push(i);       
}
console.log(...multipleList);

// WHILE SECTION
var multipleList = [];
var i = 1;
while (multipleList.length !== maxNum) {
	if (i % multiple === 0) {
        console.log(`add ${i} to multipleList`);
        multipleList.push(i);
    }
	i++;
}
console.log(...multipleList);