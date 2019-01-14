// Запросить у пользователя значение, кратное которому 
// будут выводиться числа - вывести их в консоль.

var maxNum = 20;
var multiple = +prompt('Введите число от 1 до ' + maxNum + ' к которому \nбудем выводить кратные числа', 2);

// FOR SECTION
console.log('// FOR SECTION: числа от 1 до ' + maxNum + ' кратные ' + multiple);
for (var i = 1; i <= maxNum; i++) {
	if (i % multiple === 0) console.log(i);	
}

// WHILE SECTION
console.log('// WHILE SECTION: числа от 1 до ' + maxNum + ' кратные ' + multiple);
var i = 1;
while (i <= maxNum) {
	if (i % multiple === 0) console.log(`${i} кратно ${multiple}`);
	i++;
}