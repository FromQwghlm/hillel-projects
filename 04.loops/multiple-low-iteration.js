// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

var multiple = +prompt('Введите число к которому будем выводить кратные числа', 2);
var maxNum = +prompt('Сколько кратных чисел вывести?', 10);
var multipleList = [];

console.log('// Числа кратные ' + multiple + ':');
for (var i = 1; i <= maxNum; i++) {
	multipleList.push(i * multiple);      
}
console.log(...multipleList);

